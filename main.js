



function prezzoTot() {

    let ore = document.getElementById("hoursrequested").value;
    console.log(ore); 

    let typeofwork = document.getElementById("typeofwork").value;
 console.log(typeofwork);

let prezzo= [];

 if(typeofwork == 1){
     let prezzoBackend = ore * 20.5;
     prezzo.push(prezzoBackend);
     console.log(prezzoBackend);
 }else if(typeofwork == 2){
    let prezzofrontend = ore * 15.3;
    prezzo.push(prezzofrontend);
    console.log(prezzofrontend);
 }else if(typeofwork == 3){
let prezzoAnalisi = ore *33.6;
prezzo.push(prezzoAnalisi);
console.log(prezzoAnalisi);
 }
 let codiciPromozionali = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
 let codice = document.getElementById("dicountCode").value
 console.log(codice);
 let trovato=false;
 
 for(let i=0; i < codiciPromozionali.length; i++){
    
     if(codice == codiciPromozionali[i]){
         trovato=true;
         
     }
    }
     if(trovato == true){
        console.log("si");
        let sconto= prezzo*0.25;
        let prezzoTotale= prezzo - sconto;
    prezzoTotale = prezzoTotale.toFixed;
        console.log(prezzoTotale);
        document.getElementById("demo").innerHTML ="il tuo prezzo finale è di: " + prezzoTotale;
     }else{
        console.log("no");
        console.log(prezzo);
        
        document.getElementById("demo").innerHTML = "il tuo prezzo finale è di: " + prezzo + "\u20AC";
     }
        
     

 }
 
 





