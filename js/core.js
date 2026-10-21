(function(root){
  const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const health=s=>/\b(diabet\w*|anemi\w*|alerg\w*|celiac\w*|hiperten\w*|gastritis|cancer|enfermed\w*|vomit\w*|atracon\w*|anorexi\w*|bulimi\w*|medicament\w*|diagnostic\w*|tratamiento|insulina|embaraz\w*|renal|colesterol|triglicer\w*)\b/.test(norm(s));
  const price=(p,v)=>!v||({bajo:p<5,medio:p>=5&&p<=10,alto:p>10&&p<=15,mayor:p>15}[v]===true);
  const time=(t,v)=>!v||({rapido:t<10,medio:t>=10&&t<=20,largo:t>20}[v]===true);
  const matches=(d,f)=>({presupuesto:price(d.precio,f.presupuesto),tiempo:time(d.tiempo,f.tiempo),momento:!f.momento||d.momento===f.momento,tipo:!f.tipo||d.tipo===f.tipo,preferencia:!f.preferencia||f.preferencia==='sin'||d.preferencia===f.preferencia,zona:!f.zona||(f.zona==='cerca'?d.zona!=='casa':d.zona===f.zona)});
  function search(data,f={}){
    if(health(f.q)||health(f.ingrediente))return{blocked:true,exact:[],alternatives:[]};
    const words=norm(f.q).split(/\s+/).filter(Boolean);
    const base=data.filter(d=>words.every(w=>norm(d.nombre+' '+d.ingredientes.join(' ')).includes(w))&&(!(f.preferencia==='sin'&&norm(f.ingrediente))||!d.ingredientes.some(x=>norm(x).includes(norm(f.ingrediente)))));
    const sort=(a,b)=>f.orden==='tiempo'?a.tiempo-b.tiempo||a.precio-b.precio:a.precio-b.precio||a.tiempo-b.tiempo;
    const exact=base.filter(d=>Object.values(matches(d,f)).every(Boolean)).sort(sort);
    // Preferencia y exclusión de ingredientes nunca se relajan en las alternativas.
    const alternatives=exact.length?[]:base.filter(d=>matches(d,f).preferencia).map(d=>({item:d,reasons:Object.entries(matches(d,f)).filter(([k,v])=>!v).map(([k])=>k)})).filter(x=>x.reasons.length>0&&x.reasons.length<=2).sort((a,b)=>a.reasons.length-b.reasons.length||sort(a.item,b.item)).slice(0,6);
    return{blocked:false,exact,alternatives};
  }
  root.NutriCore={norm,health,price,time,search}; if(typeof module!=='undefined')module.exports=root.NutriCore;
})(typeof window==='undefined'?globalThis:window);
