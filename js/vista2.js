

$(document).ready(function() {
	
	$("#numero").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});

	$("#numero").keyup(function(evento) {
        var longitud = $(this).val().length;
        if (longitud== 9) {
            
			$(this).attr("maxlength","9");
			$("#siguiente").attr("href", "vista3.html");
		} else {
			$("#siguiente").removeAttr("href");
		}
	});
	$("#siguiente").click(function(evento){
 	  var longi = $("#numero").val().length;
        if (longi == 9) {
        $(this).attr("maxlength","9");
        var cel =$("#numero").val();
        window.localStorage.setItem("number",cel);
        var numeroTel=localStorage.getItem("number");	
        window.localStorage.setItem("codigo",Math.floor(Math.random()*899)+100);
        var code= "LAB" + localStorage.getItem("codigo");
     	alert( code);
        }
        else{
        	var buble=$("<div> Only nine characters !</div>");
        	buble.addClass("error");
        	$("form").append(buble);
        }
   });	
});









