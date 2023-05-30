 // document.querySelector('#alert-confirm').addEventListener('click', () => {
    //     document.querySelector('#alert').remove('disabled');
    // });

    const alertbtn = document.getElementById('alert-confirm');
const alertbox = document.getElementById('alert');

alertbtn.addEventListener('click', () => {
  alertbox.remove();
});




