
$(document).ready(function(){

var condolencias = [
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-01",
    "precio": 120
  

  },
   {
    "descripcion": "clásico arreglo de una docena y media de rosas. Recuerda que las rosas rojas son la mejor forma de expresar tus sentimientos de amor (el florero puede variar según disponibilidad).",
    "titulo": "minivan",
    "image": "./img/flor-02",
    "precio": 120

  },
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-03",
    "precio": 120

  },
   {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/flor-04",
    "precio": 120

  }
]


var rosas = [
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-01",
    "precio": 120

  },
   {
    "descripcion": "clásico arreglo de una docena y media de rosas. Recuerda que las rosas rojas son la mejor forma de expresar tus sentimientos de amor (el florero puede variar según disponibilidad).",
    "titulo": "minivan",
    "image": "./img/rosa-02",
    "precio": 120

  },
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-03",
    "precio": 120

  },
   {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "image": "./img/rosa-04",
    "precio": 120

  }
]

let tulipanes = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
]


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
  image_holder.attr("alt", product.descripcion);

  

  // colocamos la imagen en el div de 
  var product_description = $( this ).find(".product-description");
  product_description.find("a").text(product.titulo);
  product_description.find(".product-description__price").text("€ " + product.precio);

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
 

    //$(".image-holder--original").css("background-image", "url("+'./img-tulipanes/tulipan-01.jpg'+")");


});


  pintarCatalogo(condolencias)

});
