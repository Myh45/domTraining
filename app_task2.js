const h1 = document.getElementsByTagName('h1');
h1[0].style.background = 'green';

const div = document.querySelector('#myDiv').children;
div[0].style.fontWeight = 'bold';
div[1].style.color = 'red'
div[2].style.textDecoration = 'underline';
div[3].style.fontStyle = 'italic';

const ul = document.querySelector('#myList');
ul.style.display = 'flex';

const span = document.getElementsByTagName('span');
span[0].style.visibility = 'hidden';