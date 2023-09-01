function createBlockLevel() {
    var LevelValue = document.querySelectorAll('p#number');
    console.log(LevelValue.length)
    var LevelSection = document.querySelectorAll('div.level');
    for (let count = 0; count <= LevelSection.length; count++) {
        for (let i = 1; i <= 5; i++) {
            var blockLevel = document.createElement('div');
            blockLevel.classList.add('block-level-empty');
            if (LevelValue[count].textContent - i >= 0) {
                blockLevel.classList.remove('block-level-empty')
                blockLevel.classList.add('block-level');
            }
            LevelSection[count].appendChild(blockLevel);
        }
    }

   
}
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
            idResults.push(idValues[i].textContent)
        }
    }

    exibirResultados(resultados, idResults);
}

function exibirResultados(resultados, id) {
    var listaResultado = document.getElementById("resultadoPesquisa");
    listaResultado.innerHTML = "";

    resultados.forEach(function (resultado) {
        var itemLink = document.createElement('a');
        var idValue = document.createElement('p');
        var itemLista = document.createElement("p");

        idValue.classList.add('id-details');
        itemLista.classList.add('name-cat');

        itemLink.href = '/Home/Details/' + id;

        itemLista.textContent = resultado;
        idValue.textContent = id;

        itemLink.appendChild(idValue);
        itemLink.appendChild(itemLista);
        listaResultado.appendChild(itemLink);
    });
}
createBlockLevel();