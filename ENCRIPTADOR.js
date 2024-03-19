let vocales=['e','i','a','o','u']
let llavesEncriptador=['enter','imes','ai','ober','ufat'];
let textoEncriptado=String(' ');
let textoNumerico=String(' ');
let textoIn=String(' ');
let x=document.getElementById('cuadroPresentacion');
let y=document.getElementById('textoResultado');


function encriptar(){
    let n=0;
    textoIn=document.getElementById('texto').value;
    while(n<=vocales.length){
        textoEncriptado=textoIn.replaceAll(vocales[n],llavesEncriptador[n]);
        textoIn=textoEncriptado;
        n++;
    }
    cambio();
    asignacion(`texFinal`,`${textoEncriptado}`);
    return ;
}

function desEncriptar(){
    let i=0;
    textoIn=document.getElementById('texto').value;
    while(i<=llavesEncriptador.length){
        textoEncriptado=(textoIn.replaceAll(llavesEncriptador[i],vocales[i]));
        textoIn=textoEncriptado;
        i++
    }
    cambio();
    asignacion(`texFinal`,`${textoEncriptado}`);
    return;
}

function asignacion(elemento,texto){
    let elementoHTML=document.getElementById(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function cambio(){
    x.style.display='block';
    y.style.display='none';
    if(y.style.display==='block'){
        y.style.display='none';
        x.style.display='block';
    }else{
        y.style.display='block';
        x.style.display='none';
    }
}

function condicionesIniciales(){
    x.style.display='none';
    y.style.display='block';
    if(y.style.display==='block'){
        y.style.display='none';
        x.style.display='block';
    }else{
        y.style.display='block';
        x.style.display='none';
    }
}
function copiar(){
    let aux=document.getElementById('texFinal').textContent;
    navigator.clipboard.writeText(aux);
    console.log(aux);
    reset();
}

function reset(){
   document.querySelector('#texto').value=('');
   condicionesIniciales();
}