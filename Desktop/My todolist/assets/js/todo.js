// check off specific todo (or "this") by clicking
$("ul").on("click", "li", function(){ // use on(click) will add listeners for all potential future elements
$(this).toggleClass("completed");
});
// --BELOW IS SHORTENED BY ABOVE CODE BY CREATING A CSS CLASS IN CSS FILE CALLED COMPLETED--
// // if li is gray
// if ($(this).css("color")==="rgb(128, 128,128)"){// have to use rgb
//   // turn it black
//   $(this).css({
//     color: "black",
//     textDecoration: "none"
//   });
// }
// else{
//   //$(this).css("color", "gray"); // this refers to each clicked element
//   //$(this).css("text-decoration", "line-through");//strike-through effect
//   //or another way to write it:
//   $(this).css({
//     color:"gray",
//     textDecoration: "line-through"
//   });
// }
// });

//--CLICK ON X TO DELETE todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); // this method limits the event on just x instead of everything
});

$("input[type='text'").keypress(function(event){ //event key can be can be called anything{
  if(event.which === 13){// enter key value is 13
    // grabbing new todo text from input
 var todoText = $(this).val();
 $(this).val(""); // empty string sets as a setter rather than getter
 //create a new li and add to ul
 $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>")

  }
});
$(".fa-pencil-square").click(function(){
  $("input[type='text'").fadeToggle()
});
