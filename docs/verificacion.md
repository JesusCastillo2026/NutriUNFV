# Verificación de V1 — 21 de octubre de 2026

## Comprobado
- `node tests.cjs`: 11 comprobaciones aprobadas (24 registros únicos, metadatos, límites de precio y tiempo, filtros combinados, orden, normalización, alternativas, exclusiones, consultas de salud y recetas).
- Sintaxis JavaScript verificada con Node.
- GitHub Pages desplegado y abierto en navegador real.
- Filtro menor a S/ 5: ocho resultados. Mayor a S/ 15: un resultado.
- Favorito conservado al recargar y eliminado correctamente.
- Combinación sin coincidencias: alternativas explicadas. Texto inexistente: estado vacío.
- Formulario vacío: cuatro campos obligatorios. Envío local de prueba confirmado y borrado del almacenamiento local.
- SQL `schema.sql` ejecutado en el proyecto Supabase `evhyavtxrjehzqlsvavp`. RLS activa y política `opiniones_insert_anon` comprobadas en metadatos.
- Configuración cliente desplegada; un envío desde el formulario recibió confirmación de Supabase.
- Se dejó una respuesta técnica marcada `PRUEBA TÉCNICA NutriUNFV; no es respuesta de participante`. Excluirla del análisis con estudiantes.
- Navegación a orientación profesional y consejos disponible.

## Correcciones de revisión
- Acceso «Saltar al contenido» enfoca el contenido sin activar una ruta inexistente.
- Opción del día conservada en móvil; imagen decorativa oculta para ahorrar espacio.
- Singular en resultado único y foco del contenedor principal ajustados.
- Fuentes sanitarias enlazadas en orientación profesional.

## Pendiente
- Verificar desde un visitante que solicitudes SELECT/UPDATE/DELETE sean rechazadas (los grants SQL solo conceden INSERT).
- Pruebas con al menos tres estudiantes, a cargo del equipo. Esta verificación técnica no las sustituye.
- V2 e informe final después de recopilar resultados auténticos. No se inventaron respuestas ni métricas de usuarios.