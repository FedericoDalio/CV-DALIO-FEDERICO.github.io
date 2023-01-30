/*La siguiente funcion es para enviar correo a la direccion en cuestion con la app predeterminada del sistema.*/
document.getElementById('enviarCorreo').addEventListener('click', function() {
    var email = document.createElement("a");
    email.href = "mailto:fede.dalio1@gmail.com";
    email.click();
})

document.getElementById('verMapaUno').addEventListener('click', function() {
  var map = document.createElement("a");
  //map.href = "https://www.google.com.ar/maps/place/R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.12433,-64.3772087,13z/data=!3m1!4b1!4m5!3m4!1s0x95d2000fbdd02247:0xc58d0a705d7cc0e3!8m2!3d-33.1231585!4d-64.3493441";
  map = window.open('https://www.google.com.ar/maps/place/R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.12433,-64.3772087,13z/data=!3m1!4b1!4m5!3m4!1s0x95d2000fbdd02247:0xc58d0a705d7cc0e3!8m2!3d-33.1231585!4d-64.3493441', '_blank');
  map.click();
})

document.getElementById('verMapaDos').addEventListener('click', function() {
  var mapDos = document.createElement("a");
  //mapDos.href = "https://www.google.com.ar/maps/place/25+de+Mayo+273,+X5800CPG+R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.1231074,-64.3474861,17z/data=!3m1!4b1!4m5!3m4!1s0x95d2000c39ffcad3:0x895649d3efc7e042!8m2!3d-33.1231003!4d-64.345229";
  //la forma de arriba lleva al link permaneciendo en la misma pestaña.
  mapDos = window.open('https://www.google.com.ar/maps/place/25+de+Mayo+273,+X5800CPG+R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.1231074,-64.3474861,17z/data=!3m1!4b1!4m5!3m4!1s0x95d2000c39ffcad3:0x895649d3efc7e042!8m2!3d-33.1231003!4d-64.345229', '_blank');
  //la linea de arriba hace un redirect pero abre el link en una nueva pestaña.
  mapDos.click();
})