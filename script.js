const titulo = document.querySelector("#titulo");
const imagen = document.querySelector("#imagen");
const enlace = document.querySelector("#enlace");
const cuerpoPagina = document.querySelector("body");

const IMG_1 = "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg";
const IMG_2 = "https://3.bp.blogspot.com/-iTzWtKaucxc/UhjqiX4GrTI/AAAAAAAADes/VXkOmst49Bg/s1600/the-conjuring-poster.jpg";
const IMG_3 = "https://res.cloudinary.com/practicaldev/image/fetch/s--d6Pe6bTo--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://www.wallpapertip.com/wmimgs/83-838195_javascript-javascript-hd.png";

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/";
const ENLACE_2 = "https://discord.com/"; 
const ENLACE_3 = "https://es.stackoverflow.com/";

let opcionRecibida = prompt("Ingrese  1, 2 o 3 para cambiar la estetica de la pagina");

function modificarPagina(colorFondo, colorTexto, enlaceImg, enlacePagina){
    cuerpoPagina.style.backgroundColor = colorFondo;
    cuerpoPagina.style.color = colorTexto;
    imagen.src = enlaceImg;
    enlace.href = enlacePagina;
}


if( opcionRecibida == 1){
    modificarPagina("orange", "black", IMG_1, ENLACE_1);
}else if( opcionRecibida == 2){
    modificarPagina("black", "white", IMG_2, ENLACE_2);
}else if( opcionRecibida == 3){
    modificarPagina("pink", "green", IMG_3, ENLACE_3);
}