const dataAtual = new Date() ;
let dataObjetivo = prompt("Data final (Formato ANO-MÊS-DIA, exemplo: 2024-05-30");
dataObjetivo = new Date(dataObjetivo+"T23:59:59") ;
let diasQueFatltam = Math.floor((dataObjetivo - dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam+" dias";