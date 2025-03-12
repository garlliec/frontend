const formulario = document.getElementById('myform');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  
  let classe = null;
  const checkboxes = document.querySelectorAll('input[name="opclasse"]:checked');
  checkboxes.forEach(checkbox => {
    classe = parseInt(checkbox.value);
  });

  const vig = parseFloat(document.getElementById('vig').value);
  const niv = parseFloat(document.getElementById('niv').value);
  let nomep = document.getElementById("nomep").value;

  let pvin = 0;
  let pv = 0;
  let npn = niv-1;
  let nex = niv*5;
  let pvnex = 0;

  if (classe === 1){
   pvin = 20+vig;
   pvnex = 4+vig;
   pv = (npn*pvnex) + pvin;
   console.log("Nome do personagem: " + nomep)
   console.log("Classe: Combatente");
   console.log("NEX:  " + nex + "%");
   console.log("PV:  " + pv);
  } else if (classe === 2){
    pvin = 16+vig;
    pvnex = 3+vig;
    pv = (npn*pvnex) + pvin;
    console.log("Nome do personagem: " + nomep)
    console.log("Classe: Especialista");
    console.log("NEX:  " + nex + "%");
    console.log("PV:  " + pv);
   } else if (classe === 3){
    pvin = 12+vig;
    pvnex = 2+vig;
    pv = (npn*pvnex) + pvin;
    console.log("Nome do personagem: " + nomep)
    console.log("Classe: Ocultista");
    console.log("NEX:  " + nex + "%");
    console.log("PV:  " + pv);
   } else {
    console.log("Opção de classe inexistente");
   };

})
