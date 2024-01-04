function gerarCombinacoes() {
    const combinacoes = document.getElementById('combinacoes').value;
    const resultado = document.getElementById('resultado');
    const tipoSelecionado = document.querySelector('input[name="tipo"]:checked').value;
    resultado.innerHTML = '';

    for (let i = 0; i < combinacoes; i++) {
        const numeros = gerarNumeros(tipoSelecionado);
        const combinacao = `<div class="combinacao">Combinação ${i + 1}: ${numeros.map(numero => `<div class="bola">${numero}</div>`).join('')}</div>`;
        resultado.innerHTML += combinacao;
    }
}

function gerarNumeros(tipo) {
    let numerosSemRepeticao = new Set();
    while (numerosSemRepeticao.size < 6) {
        let numero;
        if (tipo === 'todos') {
            numero = Math.floor(Math.random() * 60 + 1);
        } else if (tipo === 'pares') {
            numero = 2 * Math.floor(Math.random() * 30 + 1);
        } else if (tipo === 'impares') {
            numero = 2 * Math.floor(Math.random() * 30) + 1;
        }
        numerosSemRepeticao.add(('0' + numero).slice(-2));
    }
    return Array.from(numerosSemRepeticao).sort();
}

