let nam = document.getElementById('nav--user');
let nam2 = document.getElementById('nav--use');
let tes = document.getElementById('ext');
let ses = document.getElementById('btn5');


// nam = prompt ("¿Cómo te llamas?", "");

ses.addEventListener('click', function(){
    nam.innerText =`_ ${tes.value}_`;
    nam2.innerText =`_ ${tes.value}_`;
});

// ( function (){
// }) ();

function play1(){
    const url = 'https://upyy-calculator.netlify.app';
    window.location.href = url;
}

function play2(){
    const url = 'https://upyy-chat.netlify.app ';
    window.location.href = url;
}

function play3(){
    const url = "https://upyy-tictactoe.netlify.app"
    window.location.href = url;
}
function play4(){
    const url = "https://upyy-contador.netlify.app"
    window.location.href = url;
}
function play5(){ 
    const url = "https://upyy-eventos.netlify.app"
    window.location.href = url ;
}
function play6(){
    const url = "https://upyy-teclado.netlify.app";
    window.location.href = "https://www.ejemplo.com";
}
function play7(){
 
    const url = "https://upyy-jsontocsv.netlify.app"
    window.location.href = "https://www.ejemplo.com";
}
function play8(){
    const url = "https://upyy-comment.netlify.app ";
    window.location.href = url;
}
function play9(){
    const url = "https://upyy-carrito.netlify.app";
    window.location.href = url;
}
function play10(){
    const url = "https://upyy-exquiva.netlify.app"
    window.location.href = url;
}
function play11(){
    const url = "https://upyy-memoria.netlify.app"
    window.location.href = url;
}
function play12(){
    const url = "https://upyy-appdetareas.netlify.app"
    window.location.href = url;
}
 

 
//
//
/*
 function peticion1(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/htm/otro/index.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

        document.getElementById('uno').innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();
}

document.getElementById("gett1").addEventListener('click', function(){
    peticion1();
});
*/
