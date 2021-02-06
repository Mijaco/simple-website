
$(document).ready(function(){

var MOSTRARMENU =  false;
var MENSAJE_WSTP= "https://api.whatsapp.com/send?phone=51953247579&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20producto:"
var condolencias = [
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-01",
    "code": "FLOWER#A01",
    "precio": 120
  

  },
   {
    "descripcion": "clásico arreglo de una docena y media de rosas. Recuerda que las rosas rojas son la mejor forma de expresar tus sentimientos de amor (el florero puede variar según disponibilidad).",
    "titulo": "minivan",
    "image": "./img/flor-02",
    "code": "FLOWER#A02",
    "precio": 120

  },
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-03",
    "code": "FLOWER#A03",
    "precio": 120

  },
   {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-04",
    "code": "FLOWER#A04",
    "precio": 120

  },
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-04",
    "code": "FLOWER#A05",
    "precio": 120

  },
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-04",
    "code": "FLOWER#A06",
    "precio": 120

  }
]


var rosas = [
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-01",
    "code": "ROSE#A01",
    "precio": 120

  },
   {
    "descripcion": "clásico arreglo de una docena y media de rosas. Recuerda que las rosas rojas son la mejor forma de expresar tus sentimientos de amor (el florero puede variar según disponibilidad).",
    "titulo": "minivan",
    "image": "./img/rosa-02",
    "code": "ROSE#A02",
    "precio": 120

  },
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-03",
    "code": "ROSE#A03",
    "precio": 120

  },
   {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-04",
    "code": "ROSE#A04",
    "precio": 120

  },

  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-05",
    "code": "ROSE#A06",
    "precio": 120

  },

  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-04",
    "code": "ROSE#A06",
    "precio": 120

  }
]

let tulipanes = []


$( ".color-no-logo" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );

});

function pintarCatalogo(tipoFlores) {

$( ".card-wrapper" ).each(function( index ) {
  var product = tipoFlores[index];
  var image_holder = $( this ).find(".image-holder--original")
 
  // colocamos la imagen en el div de imagen
  //image_holder.css("background-image", "url("+ product.image +")");
  image_holder.attr("src", product.image + "__300x300.jpg");
  image_holder.attr("srcset", product.image +"__300x300.jpg 300w, "+ product.image+ "__100x100.jpg 100w, "+product.image+"__150x150.jpg 150w");
  //image_holder.attr("alt", product.descripcion);

  

  // colocamos la imagen en el div de 
  var product_description = $( this ).find(".product-description");
  product_description.find("a").text(product.titulo);
  product_description.find(".product-description__price").text("S/. " + product.precio);

  var texto_secundario = $( this ).find(".secondary-text");
  texto_secundario.text(product.descripcion);

  // colocamos la atributo para wstp
  var image_wstp = $( this ).find(".image-holder__link")
  image_wstp.attr("href", MENSAJE_WSTP +  product.code)

});

}

$(".color-no-logo").click(function(){

  var tipoFlor = $( this ).text();
     
switch (tipoFlor) {
  
  case 'Condolencias':
    pintarCatalogo(condolencias);
    break;
  case 'Rosas':
    pintarCatalogo(rosas);
    break;
  default:
    pintarCatalogo(tulipanes);

}
  console.log("pintando false")
$("#menu input").prop('checked',false)


});










  //pintarCatalogo(condolencias)

});
