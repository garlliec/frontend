document.getElementById("myform").addEventListener("submit", function(e){
    e.preventDefault();
    console.log("ta funcionando meu bro");

    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    console.log(user);
    console.log(senha);

        if (user === "Allie" && senha === "amoalex"){
            alert("Boas vindas ao Site Allie")
        } else {
            alert("Usuário ou senha errados")
        }
});

