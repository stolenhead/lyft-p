$(document).ready(function() {
	
	//$("#siguiente").attr("href", "vista5.html");
	$("#siguiente").click(function(evento){
		if ($("#checkbox").is(":checked")) {
			if (required()) {
			 $("#siguiente").attr("href", "vista6.html");
			}
		}
		else{
    $("#siguiente").removeAttr("href");
  	var buble= $("<div>please check terms & conditions</div>");
    buble.addClass("error");
    $(".caja2").prepend(buble);
		}
	});
});			
	function required(){
	var longi = $("#texto").val();
 	var longi3=$("#mail").val();
 	var longi2=$("#apellido").val();
 	var check=$("#check").val();
 	var expr = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var regexNombre = /^[a-zñáéíóúü]+$/gi;
    var resultado = true;
    if (!regexNombre.test(longi) && 2<longi.length && longi.length<20) {
    	
		var buble=$("<div> Write a valid Name !</div>");
        buble.addClass("error");
        $("form").prepend(buble);
        resultado = false;
	}
	if (longi2.trim().length == 0 && 2<longi2 && longi2.length<20) {
    	
		var buble=$("<div> Write your Last name !</div>");
        buble.addClass("error");
        $("form").eq(1).append(buble);
       return false;
	}
	if (!expr.test(longi3)) {
	   
       var buble=$("<div> write an email !</div>");
       buble.addClass("error");
       $("form").append(buble);
       resultado = false;
	}
	  window.localStorage.setItem("mail",longi3);
	var email=  localStorage.getItem("mail");
	window.localStorage.setItem("nombre",longi);
	var name=  localStorage.getItem("nombre");
	window.localStorage.setItem("apellido",longi2);
	var apellido=  localStorage.getItem("apellido");
	return resultado;
 
}
	 

