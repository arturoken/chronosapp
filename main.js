
window.onload = init;

function remove_loader(){

	document.querySelector(".lds-ellipsis").classList.add("remove-loader2");

}
setTimeout(remove_loader,1000);


function loader(){

	document.querySelector(".loader").classList.add("remove-loader");


}


setTimeout(loader,5000);

function init(){
    document.querySelector("#start").addEventListener("click",cronometrar);
    document.querySelector("#stop").addEventListener("click",parar);
    document.querySelector("#reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("reloj").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector("#start").removeEventListener("click",cronometrar);
 	document.querySelector("#start").classList.add("remove");
 	document.querySelector("#stop").classList.remove("remove");
    document.querySelector(".circulo_secons").classList.remove("animation-pause");
    document.querySelector(".circulo_secons").classList.add("animation-active");
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("reloj").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.querySelector("#start").addEventListener("click",cronometrar);
    document.querySelector("#start").classList.remove("remove");
 	document.querySelector("#stop").classList.add("remove");
    document.querySelector(".circulo_secons").classList.add("animation-pause");


}
function reiniciar(){
    clearInterval(id);
    document.getElementById("reloj").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector("#start").addEventListener("click",cronometrar);
    document.querySelector(".circulo_secons").classList.remove("animation-active");
    document.querySelector(".circulo_secons").classList.remove("animation-pause");
    document.querySelector("#start").classList.remove("remove");
 	document.querySelector("#stop").classList.add("remove");





}
