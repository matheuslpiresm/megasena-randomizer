function gerarCombinacoes() {
    const combinacoes = document.getElementById('combinacoes').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < combinacoes; i++) {
        const numeros = Array.from({ length: 6 }, () => ('0' + (Math.floor(Math.random() * 60) + 1)).slice(-2));
        const combinacao = `<div class="combinacao">Combinação ${i + 1}: ${numeros.map(numero => `<div class="bola">${numero}</div>`).join('')}</div>`;
        resultado.innerHTML += combinacao;
    }
}
