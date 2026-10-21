# NutriUNFV

Opciones saludables que se adaptan a ti. Prototipo educativo para estudiantes de UNFV, Escuela de Educación Secundaria — Computación e Informática.

## Ejecutar

Abrir `index.html` en el navegador o con Live Server de Visual Studio Code. No requiere compilación, npm ni autenticación. Para probar Supabase se recomienda servir por HTTP/HTTPS. Bootstrap 5.3.3 y fuentes tipográficas se cargan por CDN; los estilos propios y las fuentes de respaldo permiten usar la interfaz si esos recursos no cargan.

## Publicar en GitHub Pages

En el repositorio NutriUNFV: Settings → Pages → Deploy from a branch → main → /(root) → Save. Esperar la publicación. La URL prevista es https://JesusCastillo2026.github.io/NutriUNFV/ . La publicación debe confirmarse en el panel Pages.

## Funciones

- 24 opciones de ejemplo, todas marcadas visiblemente; datos separados en `js/data.js`.
- Búsqueda por alimento e ingredientes y filtros combinables: presupuesto, tiempo, momento, tipo, preferencia y zona. Orden por precio o tiempo.
- Alternativas con explicación de los criterios que difieren. Nunca se relaja la preferencia ni el ingrediente excluido.
- Detalles, recetas, comparación por zona, favoritos persistentes con `localStorage` y acceso al detalle en un toque desde Inicio (dos desde un acceso rápido).
- Navegación por teclado, etiquetas, avisos de estado, contraste y diseños para móvil y escritorio.
- Opinion anonima con validacion. El formulario envia respuestas a Supabase con permisos de insercion limitados. Si falla la conexion, conserva el texto y muestra el error.

## Supabase conectado

El proyecto `evhyavtxrjehzqlsvavp` ya está creado. Se ejecutó `supabase/schema.sql`; se comprobó RLS activa y solo la política INSERT para `anon`. `js/config.js` contiene la URL y una clave cliente pública. Se envió una prueba desde la web y el formulario confirmó recepción. La base contiene una fila marcada `PRUEBA TÉCNICA`; exclúyela de las respuestas de participantes.

Las claves cliente son públicas por diseño, y RLS/grants limitan su alcance. No poner `service_role`, claves secretas ni la contraseña de base de datos en la web.

Pendiente para la evaluación: probar desde un visitante que SELECT/UPDATE/DELETE sean rechazados; las concesiones SQL están escritas para permitir solo INSERT. Revisa las respuestas como propietaria en Table Editor y expórtalas desde el panel, nunca desde la web pública.### Alternativa de formulario externo

Completar `FORM_URL` con el enlace HTTPS del formulario del equipo. Aparecerá un botón para abrirlo. Este enlace NO envía automáticamente el formulario local: la persona responde en el servicio externo. Verificar su configuración para no solicitar identidad o datos de salud.

## Qué es demostrativo

El mapa es un esquema sin escala; A/B no son zonas geográficas reales. No hay geolocalización, negocios reales, distancias, horarios de apertura, pedidos, reservas ni pagos. Los precios y tiempos son ilustrativos; los tiempos de recetas pueden partir de ingredientes ya cocidos, según los pasos. No se muestran valores nutricionales sin respaldo específico. El catálogo no personaliza dietas ni diagnostica condiciones.

La detección de términos de salud es una lista de palabras y NO garantiza identificar toda consulta médica. Cuando detecta una coincidencia, no presenta resultados ni envía el comentario. No se solicitan datos personales; el texto libre siempre podría contenerlos voluntariamente, por eso se muestra una indicación de privacidad.

## Reemplazar datos de ejemplo

Editar `js/data.js`: conservar identificadores únicos y actualizar nombre, precio, ingredientes confirmados, tipo de tiempo, lugar y fuente de observación. Completar `fechaActualizacion` con la fecha real. No marcar `verificado:true` ni retirar `esDemostrativo:true` sin validación del equipo. Antes de habilitar datos reales, adaptar las etiquetas de la interfaz, hoy deliberadamente fijas como ejemplo, para que dependan de esos campos. No publicar datos privados del vendedor ni afirmar disponibilidad sin comprobarla.

## Contenido y fuentes

Consulta `docs/fuentes.md`. El contenido está pendiente de revisión por un profesional de nutrición. Las recetas son propuestas del prototipo, no prescripciones ni platos validados nutricionalmente.

## Evaluación y entrega

`docs/plan-pruebas.md`: tareas con 3 o más estudiantes, ficha de registro, feedback, iteración y seguimiento. `docs/verificacion.md`: comprobaciones técnicas y límites. La V2 se realizará después de pruebas reales; no se inventan testimonios ni resultados.

Pruebas de lógica: `node tests.cjs` (Node.js, sin dependencias).
