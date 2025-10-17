const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (/[0-9+\-*/.]/.test(key)) {
    currentInput += key;
  } else if (key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    currentInput = '';
  }

  display.value = currentInput;
});