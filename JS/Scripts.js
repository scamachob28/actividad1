function modalRegistro(){
	document.getElementById("modalRegistro").style.display="block";
	document.documentElement.style.overflow="hidden";


	var nombre = document.getElementById("formNombre").value;
	var mensaje;


	(function formCheck(){

		if(!document.getElementById("formNombre").checkValidity()){
			mensaje = "Introduce un nombre correcto";
			document.getElementById("mensajeRegistro").innerHTML = mensaje;
		}

		else {

			mensaje = "Bienvenido " + nombre;

			document.getElementById("mensajeRegistro").innerHTML = mensaje;

		}

	})();
	
}

function cerrarMBR() {
	document.getElementById("modalRegistro").style.display="none";
	document.documentElement.style.overflow="auto";

	document.getElementById("formNombre").value = "";
	document.getElementById("formApellidos").value = "";
	document.getElementById("formEmail").value = "";
	document.getElementById("formRol").value = "";

}

// Codigo para el menu

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu() {
	var posActualScroll  = document.documentElement.scrollTop;

	if (posPreviaScroll>posActualScroll){
		document.getElementById("navbar").style.top="0";
	}
	else{
		document.getElementById("navbar").style.top="-150px";
	}

	posPreviaScroll = posActualScroll;
}

// Codgio para el ligthbox

var listaRutaImgGal = [];
var numeroIMG = 0;

function modalLightboxG(elemento) {

    document.getElementById("modalLightboxG").style.display = "block";
    document.documentElement.style.overflow = 'hidden';

    listaRutaImgGal = [];

    var listaImgGal = document.getElementsByClassName("imgGaleria");

    for (var i = 0; i < listaImgGal.length; i++) {
        listaRutaImgGal.push(listaImgGal[i].getElementsByTagName('img')[0].src);
    }

    numeroIMG = listaRutaImgGal.indexOf(elemento.getElementsByTagName('img')[0].src);
    mostrarImagen(numeroIMG);
}

function mostrarImagen(indice) {
    if (indice >= 0 && indice < listaRutaImgGal.length) {
        var imgElement = document.createElement('img');
        imgElement.classList.add('imageLightbox');
        imgElement.src = listaRutaImgGal[indice];
        document.getElementById("imageToShow").innerHTML = '';
        document.getElementById("imageToShow").appendChild(imgElement);
    }
}

function nextImgGal() {
    numeroIMG++; 

    if (numeroIMG >= listaRutaImgGal.length) {
        numeroIMG = 0;
    }

    mostrarImagen(numeroIMG); 
}

function prevImgGal() {
    numeroIMG--; 

    if (numeroIMG < 0) {
        numeroIMG = listaRutaImgGal.length - 1;
    }

    mostrarImagen(numeroIMG); 
}

function closeModal() {
    document.getElementById("modalLightboxG").style.display = "none";
    document.documentElement.style.overflow = 'auto';
}

//Codigo para el menu interactivo

function marcarPestana(contenedorAMostrar){

	var listaConPestanas = document.getElementsByClassName("contenedorHeroes");

	for(var i=0; i<listaConPestanas.length; i++){
		listaConPestanas[i].style.display="none";
	}

	document.getElementById(contenedorAMostrar).style.display="block";
}