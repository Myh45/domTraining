const button = document.querySelector('.live-button');
const p = document.querySelector('.text-output');

button.addEventListener('click', () => {
    p.innerHTML += 'I was pressed! <br/>';
});
button.addEventListener('mouseover', () => {
    p.innerHTML += 'Mouse on me! <br/>';
});

button.addEventListener('mouseout', () => {
    p.innerHTML += 'Mouse is not on me! <br/>';
});
