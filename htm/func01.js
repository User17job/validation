
const valid = document.querySelector('#valid');
const Nam = document.getElementById('nom');
const edad = document.getElementById('edad');
const sus = document.getElementById('sus');
const pass = document.getElementById('pass');
const texto1 = document.getElementById('text1');
const texto2 = document.getElementById('text2');
const texto3 = document.getElementById('text3');
const dib = document.getElementById('app2');
const showD = document.querySelector('.showder');

const content1 = document.querySelector('.contenedor1');
const contenDiv1 = document.querySelector('.contenedor1--div');
const nav1 = document.querySelector('.nav1');
const h21 = document.querySelector('.uno');


const content2 = document.querySelector('.contenedor2');
const contenDiv2 = document.querySelector('.contenedor2--div');
const nav2 = document.querySelector('.nav2');
const h22 = document.querySelector('.dos');



let vir = true;

// las variable mas impoortante pues de esta se validara si si o si no se muestra el contenido  
let validacion ;
let validacion2 ;
let validacion3 ;
let validacion4;

// para validar que usuario ingreso los datos 
valid.addEventListener('click',()=>{
 if(Nam.value.length == 0){
    console.log('false/');
    validacion=false;
 }else{
    console.log('true');
    validacion=true;
}
});
valid.addEventListener('click',()=>{
 if(edad.value.length == 0){
    console.log('false/');
    validacion2=false;
 }else{
    console.log('true');
    validacion2=true;
 }
});
valid.addEventListener('click',()=>{
 if(sus.value == 10001){
    console.log('true');
    validacion3=true;
 }else{
    console.log('false/');
    validacion3=false;
 }
});
valid.addEventListener('click',()=>{
 if(pass.value.length < 5){
    console.log('false/_');
    validacion4=false;
 }else{
    console.log('true/_')
    validacion4=true;
 }
});
//

//aqui se muestran los mensajes al usuario para que llene los campos
    valid.addEventListener('click',()=>{
    if(Nam.value.length == 0){
        document.getElementById("text0").innerHTML = `<h4>por lo menos pon tu nombre</h4>`;
    }else{
        document.getElementById("text0").innerHTML = `<h4>.</h4>`;
    }
});
    valid.addEventListener('click', ()=>{
        if(edad.value.length == 0){
            document.getElementById("text1").innerHTML = `<h4>no tienes edad?</h4>`;
        } 
        if(edad.value >= 18){
            document.getElementById("text1").innerHTML = `<h4>.</h4>`; 
        }
        if(edad.value.length != 0){
            document.getElementById("text1").innerHTML = `<h4>.</h4>`;
        }
  
    
});
    valid.addEventListener('click', ()=>{
        if(sus.value == 10001){
        document.getElementById("text2").innerHTML = `<h4>.</h4>`;
    }else{
        document.getElementById("text2").innerHTML = `<h4>me parece que no eres usuario;)</h4>`;    
    };
});
    valid.addEventListener('click',()=>{
    if(pass.value.length < 6){
       document.getElementById('text3').innerHTML = `<h4>um um<h4>`;
    }else{
        document.getElementById('text3').innerHTML = `<h4>.<h4>`; 
    }
});

// aqui se deside que se mostrara al usuario
//     valid.addEventListener('click', function(){
//     if(validacion == true){
//         if(edad.value >= 18){
//             validd();
//             console.log('si lo es');
//         }else{
//             validdd();
//             console.log('no lo es');
//     }
//     }else{
//         alert('cumple con los estatutos we');
//         dib.classList.remove('verde','rojo');
//     }
// });

valid.addEventListener('click', function(){
    if(validacion==true ){
        console.log('1hecho');
        if(validacion2==true){
            console.log('2hecho');
            if(validacion3==true){
                console.log('3hecho');
                if(validacion4 == true){
                    console.log('4hecho');
                    if(edad.value >= 18){
                        validd();
                        console.log('si lo es');
                        h22.innerText=`Contenido para ${Nam.value}:)`
                    }else{
                        validdd();
                        console.log('no lo es');
                        h21.innerText=` Contenido para ${Nam.value} :)`;
                    } 
                }else{
                    console.log('4Error');
                    dib.classList.remove('verde');
                    dib.classList.remove('rojo');
                }
            }else{
                console.log('3Error');
                dib.classList.remove('verde');
                dib.classList.remove('rojo');
            }
        }else{
            console.log('2Error');
            dib.classList.remove('verde');
            dib.classList.remove('rojo');
        }
    }else{
        console.log('1Error')
        alert('cumple con los estatutos we');
        dib.classList.remove('verde');
        dib.classList.remove('rojo');
    }
});
 //esta funcion mostrara contenido fuera de la clase +A Y B
 function validd(){
    dib.classList.remove('verde');
    dib.classList.add('rojo');

    content1.style.display= 'none';
    content2.style.display= 'grid';
 
 }
 
 function validdd(){
    dib.classList.remove('rojo');
    dib.classList.add('verde');
 
    content2.style.display= 'none';
    content1.style.display= 'grid';
 }
 
 // hasta donde yo se en este codigo solo hay un error esponencial a en la parte del cliente //
 //pues al solo validar el ultimo de todos los input puede acceder alguien que no es permitido h 
 
 //ya lo resolvi :)

 showD.addEventListener('click', function(){
    if(vir==true){
        app.style.left="-500px";
        app.style.transition="2s";
        showD.classList.remove('showder');
        showD.classList.add('show');
        dib.style.left='1%';
        dib.style.width='98%';
        dib.style.transition='2s';
        nav2.style.width= '92.5%';
        nav2.style.height= '60px';
        nav2.style.transition='2s';

        nav1.style.width= '92.5%';
        nav1.style.height= '60px';
        nav1.style.transition='2s';
        vir = false;   
    }else{
        app.style.left="10px";
        app.style.transition="2s";
        showD.classList.remove('show');
        showD.classList.add('showder');
        dib.style.left='32%';
        dib.style.width='855px';
        dib.style.transition='2s';
        nav2.style.width= '63%';
        nav2.style.height= '50px';
        nav2.style.transition='2s';

        nav1.style.width= '63%';
        nav1.style.height= '50px';
        nav1.style.transition='2s';
        vir = true;   
    }
});
 //
/*
 function ajax(){
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

*/
 function peticion0(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/htm/otro1/index.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

        document.getElementById('uno').innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();
}

document.getElementById("gett2").addEventListener('click', function(){
    peticion0();
});
//
//
//
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
 

 



const nam = document.querySelector('.nav-div');
const tes = document.querySelector('#ext');
const ses = document.querySelector('#btn5');


// nam = prompt ("¿Cómo te llamas?", "");

ses.addEventListener('click', function(){
    nam.innerText =`_ ${tes.value}_`;
});

  

 