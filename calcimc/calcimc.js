function calcularIMC(event, tipo){
    event.preventDefault();
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    const resultelaDiv = document.getElementById("resultela");

    //altura /= 100;

    let imc = peso / (altura * altura);

    imc = imc.toFixed(2);
    mensagem_final = "Seu imc é: " + imc + ". Você está classificado em ";
    
    if (imc < 18.5 ){
        mensagem_final += "abaixo do peso normal.";

    } else if ( imc > 18.5 && imc <= 24.9){
        mensagem_final += "peso normal.";
       

    } else if (imc > 24.9 && imc <= 29.9){
        
        mensagem_final += "excesso de peso";
    
    } else if (imc > 29.9 && imc <= 34.9){
      
        mensagem_final += "obesidade classe I.";
       

    } else if (imc > 34.9 && imc < 39.){
        mensagem_final += "obesidade classe II.";
        

    } else if (imc > 40.0){
        
        mensagem_final += "obesidade classe III.";

    } else {
        mensagem_final += " em nada...Insira as informações necessárias.";
    }
     
    if (tipo === 1 ){
        alert(mensagem_final);
    } else if ( tipo === 2){
        console.log(mensagem_final);
    }
    else {
        resultelaDiv.textContent = (mensagem_final);
    }
};

