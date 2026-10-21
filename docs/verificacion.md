# Verificación de V1 — 21 de octubre de 2026

## Comprobado
- `node tests.cjs`: 11 comprobaciones aprobadas (24 registros únicos, metadatos, límites de precio y tiempo, filtros combinados, orden, normalización, alternativas, exclusiones, consultas de salud y recetas).
- Sintaxis JavaScript verificada con Node.
- GitHub Pages desplegado y abierto en navegador real.
- Filtro menor a S/ 5: ocho resultados. Mayor a S/ 15: un resultado.
- Favorito conservado al recargar y eliminado correctamente.
- Combinación sin coincidencias: alternativas explicadas. Texto inexistente: estado vacío.
- Formulario vacío: cuatro campos obligatorios. Envío de prueba sin conexión: confirmación explícita de guardado local. Datos locales de prueba borrados.
- Navegación a orientación profesional y consejos disponible.
- Vista estrecha: ancho de contenido igual al viewport, sin desbordamiento horizontal.

## Correcciones de revisión
- Acceso «Saltar al contenido» enfoca el contenido sin activar una ruta inexistente.
- Opción del día conservada en móvil; imagen decorativa oculta para ahorrar espacio.
- Singular en resultado único y foco del contenedor principal ajustados.
- Fuentes sanitarias enlazadas en orientación profesional.

## Pendiente
- Crear proyecto Supabase: la persona propietaria debe definir y enviar la contraseña en su navegador.
- Ejecutar schema.sql, configurar URL y clave pública, verificar inserción real y denegación de lectura/edición anónimas. No se ha comprobado todavía el guardado remoto.
- Pruebas con al menos tres estudiantes, a cargo del equipo. Esta verificación técnica no las sustituye.
- V2 e informe final después de recopilar resultados auténticos. No se inventaron respuestas ni métricas de usuarios.
