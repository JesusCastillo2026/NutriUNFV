# Qhali Mikhuna

Prototipo educativo independiente de estudiantes de Educación Secundaria, especialidad Computación e Informática, UNFV (Lima, Perú). Evolución de NutriUNFV.

**Web:** https://jesuscastillo2026.github.io/QhaliMikhuna/

**Documentación de cambios:** [PDF de 8 páginas](docs/Qhali-Mikhuna-cambios.pdf).

## Ejecutar y publicar

La aplicación completa está en `index.html`. Se puede abrir directamente en un navegador moderno; no requiere npm, instalación, servidor de aplicación ni librerías externas. Para conservar datos de forma estable, usar la URL HTTPS de GitHub Pages: el comportamiento del almacenamiento en archivos `file://` depende del navegador.

1. Subir `index.html` a la raíz del repositorio en la rama `main`.
2. Abrir **Settings → Pages → Build and deployment**.
3. Elegir **Deploy from a branch**, rama **main**, carpeta **/(root)** y guardar.
4. Esperar a que **pages build and deployment** termine correctamente en **Actions**.
5. Abrir el enlace público y recargar si se conserva una versión antigua.

El repositorio conserva su nombre NutriUNFV para mantener la dirección compartida. Los archivos antiguos de `js/`, `css/`, `assets/` y `supabase/` son antecedentes; el nuevo `index.html` no los carga. Las pruebas de esta versión están en `tests-qhali.cjs`, no en el archivo antiguo `tests.cjs`.

## Funciones

- **Hoy:** check-in opcional en cinco pasos con seis datos (hambre y comidas saltadas comparten pantalla), tres ideas dentro del presupuesto y mensaje empático. Un registro por día, hasta 30 días de historial.
- **Comer:** ocho preparaciones; filtros de presupuesto, tiempo y vegetariano; cinco locales suministrados por el equipo; detalles, Maps por dirección y reserva oficial UNFV.
- **Etiquetas:** cuatro octógonos, consejos sin culpa, leche frente a mezcla láctea y lectura de ingredientes.
- **Más:** presupuesto semanal, menú pendiente simulado, panel local o ficticio, orientación, privacidad y equipo.
- Diseño mobile-first, modo oscuro automático, foco visible, diálogos nativos, controles amplios y respeto de movimiento reducido.

## Privacidad y cambio respecto a Supabase

Esta versión no envía respuestas a servidores. No utiliza Supabase, cuentas ni analítica. Se usa `localStorage` con `try/catch`, validación y aviso cuando no se puede guardar. La política CSP bloquea conexiones de la aplicación y envíos de formularios.

- Historial: máximo 30 días, una entrada diaria actualizable. Aviso de cuidado al marcar triste o acumular tres registros difíciles en los últimos siete días.
- Presupuestos: hasta 12 semanas registradas.
- Simulación: hasta 50 códigos; no representa pagos ni entrega de comida.
- El botón de borrado elimina solo la clave `qhali-mikhuna-v1` de este navegador.
- El almacenamiento local no está cifrado ni sincronizado. En dispositivos compartidos se puede omitir el check-in o borrar los registros.

La base de Supabase anterior **no fue eliminada ni modificada**. Las opiniones antiguas permanecen allí; los nuevos check-ins no aparecen en Table Editor. Maps, la reserva oficial y las fuentes se abren solo mediante enlaces, sin adjuntar respuestas.

## Editar datos

Modificar los arreglos `RECIPES` y `PLACES` dentro del HTML. En `PLACES`, `price: null` significa “por confirmar”, nunca gratis. No añadir negocios, precios, horarios ni coordenadas sin verificación. Los costos de recetas son estimaciones de ingredientes, no precios comerciales ni porciones prescritas.

## Verificación

Ejecutar `node tests-qhali.cjs`: 27 pruebas de lógica y contratos con DOM simulado. Cubren recomendaciones, cuidado, ventanas de fechas, persistencia y fallos, filtros, presupuesto, simulación y borrado. No equivalen a auditoría de accesibilidad ni a prueba visual en todos los navegadores.

Para regenerar el PDF: `node docs/generar-cambios.cjs` (Node.js sin dependencias).

Pendiente del equipo: revisión final de nutricionista, comprobación presencial de datos comerciales y prueba de uso con estudiantes. No se inventaron métricas ni resultados de usuarios.

## Equipo

Castillo Sumire Belssy; Flores Reyes María Fernanda; Kancha Huamán Aida; Pinares Molina Briggitte; Terrones Córdova Naomi.

La app es educativa: no brinda dietas, diagnósticos, tratamientos ni suplementos. Incluye orientación profesional y aviso de emergencia alimentaria.
