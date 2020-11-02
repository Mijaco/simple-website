
$(document).ready(function(){

var tulipanes = [
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "precio": 120,
    "image": "./img-tulipanes/tulipan-01.jpg"

  },
   {
    "descripcion": "clásico arreglo de una docena y media de rosas. Recuerda que las rosas rojas son la mejor forma de expresar tus sentimientos de amor (el florero puede variar según disponibilidad).",
    "titulo": "minivan",
    "precio": 120,
    "image": "./img-tulipanes/tulipan-02.jpg"

  },
  {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "precio": 120,
    "image": "./img-tulipanes/tulipan-01.jpg"

  },
   {
    "descripcion": "Colorido bouquet de 12 gerberas surtidas. Ideal para regalar en Cumpleaños o Aniversarios.",
    "titulo": "minivan",
    "precio": 120,
    "image": "./img-tulipanes/tulipan-01.jpg"

  },
]

let condolencias = [
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

let rosas = [
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

$( ".card-wrapper" ).each(function( index ) {
  var product = tulipanes[index];
  var image_holder = $( this ).find(".image-holder--original")
 
  // colocamos la imagen en el div de imagen
  image_holder.css("background-image", "url("+ product.image +")");

  // colocamos la imagen en el div de 
  var product_description = $( this ).find(".product-description");
  product_description.find("a").text(product.titulo);
  product_description.find(".product-description__price").text("€ " + product.precio);

  


});



 $(".color-no-logo").click(function(){
     console.log($( this ).text() );
		$(".container").show();

	

		$(".image-holder--original").css("background-image", "url("+'./img-tulipanes/tulipan-01.jpg'+")");


  });

});