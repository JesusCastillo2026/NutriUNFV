const assert=require('node:assert/strict');
const {data}=require('./js/data.js'),C=require('./js/core.js');
let checks=0;function test(name,fn){fn();checks++;console.log('OK',name);}
test('24 registros, identificadores únicos y metadatos',()=>{assert.equal(data.length,24);assert.equal(new Set(data.map(d=>d.id)).size,24);assert(data.every(d=>d.esDemostrativo&&!d.verificado&&d.fuente&&d.fechaActualizacion));});
test('límites de precio sin solapamiento',()=>{for(const [p,key] of [[4.99,'bajo'],[5,'medio'],[10,'medio'],[10.01,'alto'],[15,'alto'],[15.01,'mayor']]){assert(C.price(p,key));assert.equal(['bajo','medio','alto','mayor'].filter(k=>C.price(p,k)).length,1);}});
test('límites de tiempo',()=>{assert(C.time(9,'rapido'));assert(C.time(10,'medio'));assert(C.time(20,'medio'));assert(C.time(21,'largo'));});
test('filtros combinados y orden',()=>{const r=C.search(data,{presupuesto:'medio',momento:'almuerzo',tiempo:'medio',orden:'precio'});assert(r.exact.length);assert(r.exact.every(d=>d.precio>=5&&d.precio<=10&&d.tiempo>=10&&d.tiempo<=20&&d.momento==='almuerzo'));assert(r.exact.every((d,i,a)=>!i||a[i-1].precio<=d.precio));});
test('cambiar filtro cambia resultados',()=>{assert.notDeepEqual(C.search(data,{presupuesto:'bajo'}).exact.map(d=>d.id),C.search(data,{presupuesto:'mayor'}).exact.map(d=>d.id));});
test('normalización de acentos y múltiples palabras',()=>{assert.equal(C.search(data,{q:'platano avena'}).exact[0].id,'avena');});
test('sin coincidencias exactas explica alternativas',()=>{let r=C.search(data,{presupuesto:'bajo',momento:'almuerzo',preferencia:'vegetariana'});assert.equal(r.exact.length,0);assert(r.alternatives.length);assert(r.alternatives.every(x=>x.reasons.length&&x.item.preferencia==='vegetariana'));});
test('búsqueda desconocida vacía',()=>{let r=C.search(data,{q:'zzzz'});assert.equal(r.exact.length+r.alternatives.length,0);});
test('no relaja ingrediente excluido',()=>{let r=C.search(data,{preferencia:'sin',ingrediente:'huevo',presupuesto:'mayor',tiempo:'rapido'});assert([...r.exact,...r.alternatives.map(x=>x.item)].every(d=>!d.ingredientes.includes('huevo')));});
test('consulta de salud se deriva sin resultados',()=>{let r=C.search(data,{q:'comida para diabetes'});assert(r.blocked);assert.equal(r.exact.length+r.alternatives.length,0);assert(C.health('Tengo alergia'));assert(!C.health('Quiero buscar lentejas'));});
test('todas las recetas tienen pasos e ingredientes',()=>assert(data.filter(d=>d.tipo==='casa').every(d=>d.pasos.length>=3&&d.ingredientes.length>=3)));
console.log(`${checks} comprobaciones aprobadas.`);
