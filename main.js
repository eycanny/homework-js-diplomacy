'use strict';

const colorChanger = document.querySelector('.color-changer');

colorChanger.addEventListener('click', () => {
    const colorChange = document.querySelectorAll('.color-change');
    
    for (const element of colorChange) {
    element.classList.add('red');
    }
});

const numberForm = document.querySelector('.number-form')

numberForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const numberInput = document.querySelector('#number-input');
    const userNum = Number(numberInput.value);

    const formFeedback = document.querySelector('#formFeedback');

    if (userNum >= 10 || isNaN(userNum)) {
        formFeedback.innerHTML = 'Please enter a smaller number.';
    } else {
        formFeedback.innerHTML = 'You\'re good to go!';
    }
});