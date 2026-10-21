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
- Opinión anónima con validación. Mientras Supabase no esté configurado, guarda SOLO en el navegador y lo comunica explícitamente.

## Conectar Supabase

1. Crear un proyecto gratuito NutriUNFV dentro de la organización del equipo. La contraseña de la base de datos debe gestionarla su propietario; no se necesita en la web.
2. Ejecutar `supabase/schema.sql` en SQL Editor. Revisar que la tabla `opiniones` tenga RLS activa y solo la política INSERT para `anon`.
3. En el panel del proyecto obtener la URL del proyecto y la clave **publishable** (o `anon` heredada).
4. Completar `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` en `js/config.js`. Son configuración pública. JAMÁS copiar una clave `service_role`, una clave secreta ni contraseñas.
5. Publicar el cambio. El formulario pasará de «Guardar opinión en este dispositivo» a «Enviar opinión».
6. Enviar una opinión de prueba identificada como «PRUEBA DEL EQUIPO»; confirmar la fila en Table Editor. Comprobar que una consulta anónima SELECT y solicitudes UPDATE/DELETE se rechazan. Documentar el resultado antes de declarar la integración verificada.
7. Revisar respuestas en Table Editor como propietario y exportar desde el panel si se necesita analizarlas. Las opiniones no se guardan en GitHub.

No hay protección robusta contra spam en esta versión: el campo trampa solo frena bots simples. Antes de una difusión amplia añadir limitación de solicitudes y validación mediante un endpoint con protección antispam. El acceso INSERT anónimo debe estar acotado por las restricciones del esquema. Revisar retención y eliminar datos de prueba desde el panel según decisión del propietario.

### Alternativa de formulario externo

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
