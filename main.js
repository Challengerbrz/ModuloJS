const form = document.getElementById('formulario');
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();



    const nome = document.getElementById('contato');
    const telefone = parseInt(document.getElementById('numero').value);
    let linha = `<tr>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone}<td>`;
    linha += `</td>`;
    linhas += linha;
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})