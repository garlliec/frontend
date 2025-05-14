const agentes = [
    { nomepe: "alexthecakeee", nomepla: "Alex ", classep: "Especialista" },
    { nomepe: "Asedokaiser", nomepla: "Jv", classep:"Ocultista" }

];

function carregarAgentes() {
    const listaAgentes = document.getElementById("lista-agentes");
    listaAgentes.innerHTML = ""; //Limpa antes de adicionar

    agentes.forEach((agente, index) => {
        const div = document.createElement("div");
        div.classList.add("agente");
        div.innerHTML = `
            <p id="destaquenome">${agente.nomepe}</p>
            <p> <span class="oi"> Player: </span> ${agente.nomepla}</p>
            <p>  <span class=oi> Classe: </span> ${agente.classep}</p>
            <button onclick="removerAgente(${index})">Remover</button>
        `;
        listaAgentes.appendChild(div);
    });
}

function adicionarAgente() {
    const nomepe = document.getElementById("nomepe").value;
    const nomepla = document.getElementById("nomepla").value;
    const classep = document.getElementById("classep").value;

    if (nomepe && nomepla && classep) {
        agentes.push({ nomepe, nomepla, classep });
        carregarAgentes();
        document.getElementById("nomepe").value = "";
        document.getElementById("nomepla").value = "";
        document.getElementById("classep").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function removerAgente(index) {
    agentes.splice(index, 1);
    carregarAgentes();
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", carregarAgentes);