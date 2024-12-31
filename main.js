document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[type="text"]');
    const buttons = document.querySelectorAll('.button-btn input[type="button"]');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

           if (value === 'AC') {
                currentInput = '';
                display.value = '';
            } else if (value === 'DE') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch (error) {
                    display.value = 'Error';
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
