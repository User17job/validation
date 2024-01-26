let nam = document.getElementById('nav--user');
let tes = document.getElementById('ext');
let ses = document.getElementById('btn5');


// nam = prompt ("¿Cómo te llamas?", "");

ses.addEventListener('click', function(){
    nam.innerText =`_ ${tes.value}_`;
});

// ( function (){
// }) ();