'use strict';

const colorChanger = document.querySelector('.color-changer');

colorChanger.addEventListener('click', () => {
    const colorChange = document.querySelectorAll('.color-change');
    
    for (const element of colorChange) {
        element.classList.add('red');
    }
});