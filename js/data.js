/* Catálogo de ejemplo: no representa disponibilidad, precios ni negocios verificados. */
(function (root) {
  const rows = [
    ['lentejas','Lentejas con arroz y ensalada',7.5,12,'almuerzo','menu','vegetariana','A',['lentejas','arroz','tomate','zanahoria'], 'menestras'],
    ['pollo','Pollo guisado con papa',10,18,'almuerzo','menu','variada','B',['pollo','papa','arroz','cebolla'],'plato'],
    ['fruta','Fruta de temporada',2.5,3,'media mañana','fruta','vegetariana','A',['mandarina','plátano'],'fruta'],
    ['avena','Avena con plátano',3.5,8,'desayuno','casa','vegetariana','casa',['avena','agua','plátano'],'avena'],
    ['pan-huevo','Pan con huevo y tomate',4,8,'desayuno','llevar','vegetariana','B',['pan','huevo','tomate'],'pan'],
    ['garbanzos','Ensalada de garbanzos',6,15,'almuerzo','casa','vegetariana','casa',['garbanzos cocidos','pepino','tomate','limón'],'menestras'],
    ['comedor','Arroz, frejoles y verduras',5,15,'almuerzo','comedor','vegetariana','A',['arroz','frejoles','zanahoria','brócoli'],'menestras'],
    ['pescado','Pescado al horno con camote',13,20,'almuerzo','menu','variada','B',['pescado','camote','lechuga'],'plato'],
    ['yogur','Yogur natural con avena',4.5,4,'tarde','fruta','vegetariana','A',['yogur','avena'],'avena'],
    ['tortilla','Tortilla de verduras',5,15,'cena','casa','vegetariana','casa',['huevo','zanahoria','espinaca'],'plato'],
    ['quinua','Quinua con verduras',8,18,'almuerzo','llevar','vegetariana','B',['quinua','zanahoria','arvejas'],'menestras'],
    ['pan-palta','Pan con palta',4,5,'desayuno','llevar','vegetariana','A',['pan','palta'],'pan'],
    ['sopa','Sopa de verduras con huevo',6,25,'cena','casa','vegetariana','casa',['papa','zanahoria','huevo','agua'],'plato'],
    ['tupper','Tupper de arroz y pollo',7,25,'almuerzo','casa','variada','casa',['arroz','pollo','zanahoria'],'plato'],
    ['choclo','Choclo con queso',4.5,5,'tarde','fruta','vegetariana','B',['choclo','queso'],'pan'],
    ['atun','Ensalada de papa y atún',8,20,'cena','casa','variada','casa',['papa','atún','tomate'],'plato'],
    ['wrap','Tortilla rellena de pollo',9,9,'cena','llevar','variada','A',['tortilla de trigo','pollo','lechuga','tomate'],'pan'],
    ['saltado','Saltado de verduras con arroz',8.5,15,'cena','menu','vegetariana','B',['arroz','cebolla','tomate','zapallito'],'plato'],
    ['manzana','Manzana y maní',3,3,'media mañana','fruta','vegetariana','B',['manzana','maní'],'fruta'],
    ['pasta','Pasta con tomate y verduras',6.5,20,'cena','casa','vegetariana','casa',['pasta','tomate','zanahoria'],'plato'],
    ['especial','Pescado con quinua y ensalada',17,25,'almuerzo','menu','variada','A',['pescado','quinua','lechuga'],'plato'],
    ['habas','Habas cocidas y papa',4,7,'tarde','otro','vegetariana','A',['habas','papa'],'menestras'],
    ['desayuno','Huevo, pan y fruta',6,10,'desayuno','comedor','vegetariana','B',['huevo','pan','mandarina'],'pan'],
    ['salteado','Arroz salteado con huevo',5.5,12,'cena','casa','vegetariana','casa',['arroz cocido','huevo','zanahoria','arvejas'],'plato']
  ];
  const recipes = {
    avena: ['Hierve media taza de avena en una taza de agua siguiendo las indicaciones del envase.','Remueve hasta que esté cocida.','Sirve con un plátano cortado.'],
    garbanzos: ['Usa tres cuartos de taza de garbanzos ya cocidos.','Lava el tomate y el pepino con agua segura y córtalos.','Mezcla y añade limón al servir.'],
    tortilla: ['Lava y corta un puñado de espinaca y media zanahoria.','Mezcla con dos huevos.','Cocina en sartén con un poco de aceite hasta que el huevo esté bien cuajado.'],
    sopa: ['Lava, pela y corta una papa y una zanahoria.','Cocina en agua hasta que estén blandas.','Añade un huevo y continúa la cocción hasta que quede bien cocido.'],
    tupper: ['Cocina una porción de arroz y la zanahoria.','Cocina completamente el pollo, usando utensilios separados para el alimento crudo.','Distribuye en recipientes limpios; refrigera pronto y transporta manteniendo el frío.'],
    atun: ['Lava una papa y cuécela hasta que esté blanda.','Lava y corta un tomate; escurre una porción de atún.','Mezcla al servir y conserva refrigerado si no lo consumes enseguida.'],
    pasta: ['Cuece una porción de pasta según el envase.','Lava y corta un tomate y media zanahoria.','Cocina las verduras con un poco de agua y aceite; mezcla con la pasta.'],
    salteado: ['Usa una taza de arroz cocido conservado en refrigeración.','Cocina zanahoria y arvejas en una sartén.','Añade un huevo y cocina completamente. Incorpora el arroz y calienta bien toda la preparación.']
  };
  root.NUTRI_DATA = rows.map((r,i)=>({id:r[0],nombre:r[1],precio:r[2],tiempo:r[3],momento:r[4],tipo:r[5],preferencia:r[6],zona:r[7],ingredientes:r[8],arte:r[9],
    tiempoTipo:r[5]==='casa'?'preparación':'espera',lugar:r[7]==='casa'?'Preparación en casa':r[5]==='comedor'?'Comedor de ejemplo '+r[7]:'Puesto de ejemplo '+r[7],
    descripcion:'Una opción para explorar según tu rutina y preferencias. Ingredientes, tiempos y precios son ilustrativos; confirma la información antes de elegir.',
    esDemostrativo:true,verificado:false,fuente:'Catálogo ficticio del prototipo NutriUNFV; no proviene de una observación comercial.',fechaActualizacion:'2026-10-21',
    pasos:recipes[r[0]]||[],alternativa:r[5]==='casa'?'Puedes cambiar las verduras por otras de temporada. Confirma los ingredientes de cada producto.':'Consulta ingredientes, precio y disponibilidad con el vendedor.',
    x:26+(i%3)*25,y:28+(i%2)*38
  }));
  root.NUTRI_TYPES={comedor:'Comedor universitario',menu:'Menú económico',llevar:'Comida para llevar',fruta:'Fruta o refrigerio',casa:'Preparación en casa',otro:'Otra opción'};
  if(typeof module!=='undefined') module.exports={data:root.NUTRI_DATA,types:root.NUTRI_TYPES};
})(typeof window==='undefined'?globalThis:window);
