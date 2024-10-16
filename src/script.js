let garagem = [];


function adicionarCarro() {
    const carros = {
        modelo: document.getElementById("modelo"),
        cor: document.getElementById("cor"),
        ano: document.getElementById("ano"),
        preco: document.getElementById("preco"),
        foto: document.getElementById("foto"),
        vendido: document.getElementById("vendido")
    }

    garagem.push(carros);
    localStorage.setItem("GaragemSenai", JSON.stringify(garagem))

}

function render() {
    const garagemVeiculos = document.getElementById("lista-veiculos");
    garagemVeiculos.innerHTML = ""

    for (var i = 0; i < garagem.length; i++) {
        const li = document.createElement("li");
        if (garagem[i].completed === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = garagem[i].text;

        const img = document.createElement("img")
        img.src = carros.foto

        const div = document.createElement("div");

        li.appendChild(span);
        li.appendChild(div);

        garagemVeiculos.appendChild(li);
    }
}

function buscarGaragem(){
    const garagemLS = localStorage.getItem("garagem");
    if(garagemLS){
        garagem = JSON.parse(garagemLS);
        render();
    }
}