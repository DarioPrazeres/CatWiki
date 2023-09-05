var nomes = document.querySelectorAll('p.name-cat');
var idValues = document.querySelectorAll('p.id-details');

function realizarPesquisa() {
    var results = document.querySelector('.results');
    results.style.display = 'block';
    var valorPesquisa = document.getElementById("pesquisaInput").value.toLowerCase();

    var resultados = [];
    var idResults = [];

    for (var i = 0; i < nomes.length; i++) {
        var nome = nomes[i].textContent.toLowerCase();
        if (nome.includes(valorPesquisa)) {
            resultados.push(nomes[i].textContent);
            idResults[i] = idValues[i].textContent;
        }        
    }
    exibirResultados(resultados, idResults);
}

function exibirResultados(resultados, id) {
    var listaResultado = document.getElementById("resultadoPesquisa");
    listaResultado.innerHTML = "";

    resultados.forEach(function (resultado, index) {
        var itemLink = document.createElement('a');
        var idValue = document.createElement('p');
        var itemLista = document.createElement("p");

        idValue.classList.add('id-details');
        itemLista.classList.add('name-cat');

        itemLink.href = `/Home/Details/${id[index]}`;
        console.log
        itemLista.textContent = resultado;
        idValue.textContent = id[index];

        itemLink.appendChild(idValue);
        itemLink.appendChild(itemLista);
        listaResultado.appendChild(itemLink);
    });
}
function createLinkImage() {
    var referenceImage = document.querySelectorAll('.image-id-cat');
    var imageLink = document.querySelectorAll('img.image-cat-link');
    //https://cdn2.thecatapi.com/images/
    for (let i = 0; i < 4; i++) {
        imageLink[i].src = "https://cdn2.thecatapi.com/images/" + referenceImage[i].textContent.toString() + ".jpg";
    }
}
createLinkImage()