document.addEventListener("DOMContentLoaded", () => {
            let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);
            let timeLeft = 30;
            const countdownElement = document.getElementById('countdown');
            const numberDisplay = document.getElementById('numberDisplay');
            const inputContainer = document.getElementById('inputContainer');
            const resultElement = document.getElementById('result');
            
            numberDisplay.innerText = numbers.join(' ');
            
            const timer = setInterval(() => {
                countdownElement.innerText = `Tempo rimasto: ${timeLeft} secondi`;
                timeLeft--;
                if (timeLeft < 0) {
                    clearInterval(timer);
                    countdownElement.innerText = 'Tempo scaduto! Inserisci i numeri.';
                    numberDisplay.innerText = '';
                    inputContainer.classList.remove('d-none');
                }
            }, 1000);
            
            document.getElementById('submitBtn').addEventListener('click', () => {
                let userInputs = Array.from(document.querySelectorAll('.number-input')).map(input => parseInt(input.value) || 0);
                let matchedNumbers = userInputs.filter(num => numbers.includes(num));
                resultElement.innerText = `Hai indovinato ${matchedNumbers.length} numeri! (${matchedNumbers.join(', ')})`;
                console.log(`Numeri da indovinare: ${numbers}`);
                console.log(`Numeri inseriti: ${userInputs}`);
                console.log(`Numeri corretti: ${matchedNumbers}`);
            });
        });