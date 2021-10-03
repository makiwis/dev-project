
var modal = document.getElementById("myModal"); //obtiene el modal

var btn = document.getElementById("myBtn"); //Obtiene el boton

var span = document.getElementsByClassName("cerrar")[0]; // obtiene boton para cerrar

//crea evento click para el bton
btn.onclick = function(){
    modal.style.display = "block";
}
// Cierro modl
span.onclick = function(){
    modal.style.display = "none";
}