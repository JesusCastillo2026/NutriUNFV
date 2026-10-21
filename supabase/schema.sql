-- Ejecutar una vez en el SQL Editor del proyecto NutriUNFV.
-- La web solo puede INSERTAR. No puede leer, editar ni borrar respuestas.
begin;
create table if not exists public.opiniones (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  dificultad text not null check (dificultad in ('tiempo','precio','cercania','variedad','informacion','ninguna')),
  presupuesto text not null check (presupuesto in ('bajo','medio','alto','mayor')),
  valor text not null check (valor in ('precio','rapidez','sabor','variedad','informacion')),
  funcion text not null check (funcion in ('buscar','mapa','recetas','favoritos','consejos','otra')),
  organizacion text check (organizacion in ('si','aveces','no','prefiero')),
  facilidad smallint check (facilidad between 1 and 5),
  comentario text check (char_length(comentario) <= 500),
  version text not null check (version ~ '^[0-9]+\.[0-9]+\.[0-9]+$' and char_length(version) <= 20)
);
alter table public.opiniones enable row level security;
revoke all on public.opiniones from anon, authenticated;
grant usage on schema public to anon;
grant insert (dificultad, presupuesto, valor, funcion, organizacion, facilidad, comentario, version) on public.opiniones to anon;
do $$ begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='opiniones' and policyname='opiniones_insert_anon') then
    create policy opiniones_insert_anon on public.opiniones for insert to anon with check (true);
  end if;
end $$;
commit;

-- Verificar en el panel: RLS activa; una sola política INSERT para anon.
-- No crear políticas SELECT, UPDATE o DELETE para visitantes.
