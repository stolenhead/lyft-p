$(document).ready(function() {
	$("#siguiente").click(function(evento){
    $("#imagen").change(function(){
    readURL(this);
    });
   }); 
   ponerNombre();
  }); 

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    $('#put').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
function ponerNombre(){
	var ponerNom= $("#nombrePerfil");
	ponerNom.html(localStorage.getItem("nombre"));
}
var imagenValidada=$("#imagen").val();
window.localStorage.setItem("image",imagenValidada);
var img=  localStorage.getItem("image");
