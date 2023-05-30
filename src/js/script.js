
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('select').formSelect();
});


// document.querySelector('#alert-confirm').addEventListener('click', () => {
//     document.querySelector('#alert').remove('disabled');
// });

const alertbtn = document.getElementById('alert-confirm');
const alertbox = document.getElementById('alert');

alertbtn.addEventListener('click', function() {
  alertbox.remove();
});


const button = document.getElementById('myButton');
const element = document.getElementById('myElement');

button.addEventListener('click', function() {
  element.remove();
});