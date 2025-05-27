document.addEventListener("DOMContentLoaded", function() {
  const minInput = document.getElementById('min');
  const maxInput = document.getElementById('max');
  const button = document.getElementById('sortear');
  const resultado = document.getElementById('resultado');

  button.addEventListener('click', function() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    // Validação
    if (isNaN(min) || isNaN(max)) {
      resultado.textContent = "Por favor, preencha os dois campos com números!";
      resultado.classList.add('mostrar');
      return;
    }

    if (min >= max) {
      resultado.textContent = "O valor mínimo deve ser menor que o máximo.";
      resultado.classList.add('mostrar');
      return;
    }

    // Sorteio
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibir com animação
    resultado.textContent = `Número sorteado: ${sorteado}`;
    resultado.classList.remove('mostrar'); // Remove para reiniciar a animação

    setTimeout(() => {
      resultado.classList.add('mostrar');
    }, 50);
  });
});
