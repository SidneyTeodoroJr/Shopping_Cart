document.addEventListener('DOMContentLoaded', function () {
    const quantidadeInputs = document.querySelectorAll('.form-control.quantity-input');
    const totalElement = document.querySelector('.summary-item .price');

    // Função para calcular o valor total
    function calcularTotal() {
        let total = 0;

        quantidadeInputs.forEach(function (input, index) {
            const quantidade = parseInt(input.value);
            const precoFinal = parseFloat(document.querySelector(`#produto${index} .price span`).textContent.replace('$', '').replace(',', ''));

            total += quantidade * precoFinal;
        });

        return total;
    }

    // Função para atualizar o valor total na tela
    function atualizarTotal() {
        const total = calcularTotal();
        totalElement.textContent = '$' + total.toFixed(2); 
    }

    // Função para garantir que os valores não sejam negativos
    function validarQuantidadeInput(input) {
        const valor = parseInt(input.value);
        if (isNaN(valor) || valor < 0) {
            input.value = '0';
        }
    }

    // Adiciona o evento de mudança aos inputs de quantidade
    quantidadeInputs.forEach(function (input) {
        input.addEventListener('change', function () {
            validarQuantidadeInput(this);
            atualizarTotal();
        });
    });
});