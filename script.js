

$(document).ready(function(){

	console.log("hello")

  $("p").click(function(){
    $("#container").hide();
  });


$(".container").hide();

$( ".color-no-logo" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );

});


 $(".color-no-logo").click(function(){
     console.log($( this ).text() );


		$(".container").show();


  });

});