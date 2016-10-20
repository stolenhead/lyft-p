

var valida=function(){
  var codigoEnviado= $(".input").eq(0).val()+ $(".input").eq(1).val()+ $(".input").eq(2).val();
  if(codigoEnviado==localStorage.getItem("codigo")){
  	 $("#siguiente").attr("href", "vista4.html");
  }else{
  	$("#siguiente").removeAttr("href");
  }
}

$(document).ready(function(){
  var telZone=$(".numero");
  var telefono=localStorage.getItem("number");
  $(telZone).text(telefono);
  $(".input1").focus();
  $(".next").click(valida);
  $("input").keyup(function(){
  $("input").attr("maxlength","1");
    if($(this).val().length==$(this).attr("maxlength")){
      $(this).next().focus();
      }
  });
  $("input").keyup(borrar);
});

var borrar = function(event){
    var x = event.keyCode;
    if (x == 8) {  
        $(this).prev().focus();
    }
}
$("#resend").click(function(){
	window.localStorage.setItem("codigo",Math.floor(Math.random()*899)+100);
  var code= "LAB" + localStorage.getItem("codigo");
  alert( code);
});
