function calcularIMCalert(){
    
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //altura /= 100;

    let imc = peso / (altura * altura);

    alert("Seu imc é: " + imc);
    
    if (imc < 18.5 ){
        alert("Abaixo do peso normal.");

    } else if ( imc > 18.5 && imc <= 24.9){
        alert("Peso normal.");
       

    } else if (imc > 24.9 && imc <= 29.9){
        alert("Excesso de peso.");
        

    } else if (imc > 29.9 && imc <= 34.9){
        alert("Obesidade classe I.");
       

    } else if (imc > 34.9 && imc < 39.9){
        alert("Obesidade classe II.");
        

    } else if (imc > 40.0){
        alert("Obesidade classe III.");
       

    } else {
        alert("Insira as informações necessárias.");
        
    }
};

//274756.2949301818
function calcularIMCconsole(){
  
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //altura /= 100;

    let imc = peso / (altura * altura);

    console.log("Seu imc é: " + imc);
    
    
    if (imc < 18.5 ){
        console.log("Abaixo do peso normal.");

    } else if ( imc > 18.5 && imc <= 24.9){
        
        console.log("Peso normal.");

    } else if (imc > 24.9 && imc <= 29.9){
      
        console.log("Excesso de peso.");

    } else if (imc > 29.9 && imc <= 34.9){
      
        console.log("Obesidade classe I.");

    } else if (imc > 34.9 && imc < 39.9){
        
        console.log("Obesidade classe II.");

    } else if (imc > 40.0){
       
        console.log("Obesidade classe III.");

    } else {
      
        console.log("Insira as informações necessárias.");
    }

};

function calcularIMCtela(event){
    event.preventDefault();
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    const resultelaDiv = document.getElementById("resultela");

    //altura /= 100;

    let imc = peso / (altura * altura);

    console.log("Seu imc é: " + imc);
    
    
    if (imc < 18.5 ){
        resultelaDiv.textContent = "Abaixo do peso normal";

    } else if ( imc > 18.5 && imc <= 24.9){
        resultelaDiv.textContent = "Peso normal";



    } else if (imc > 24.9 && imc <= 29.9){
      
        
        resultelaDiv.textContent = "Excesso de peso";

    } else if (imc > 29.9 && imc <= 34.9){
        resultelaDiv.textContent = "Obesidade classe I";
        

    } else if (imc > 34.9 && imc < 39.9){
        resultelaDiv.textContent = "Obesidade classe II";
       
    } else if (imc > 40.0){
        resultelaDiv.textContent = "Obesidade classe III";

    } else {
        resultelaDiv.textContent = "Insira as informações necessárias";
    
    }

};