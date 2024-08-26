const form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();
    
    // Obtém os valores dos campos de entrada
    const valueA = parseFloat(document.getElementById('campoA').value);
    const valueB = parseFloat(document.getElementById('campoB').value);

    // Verifica se valueA é maior que valueB e mostra o alerta apropriado
    if (valueA > valueB) {
        alert("Isso não está certo, valor de A maior do que B");
    } else {
        alert("Isso está certo, valor de A não é maior do que B");
    }
});

console.log(form);
