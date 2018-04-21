$("p").click(function(){
$(this).hide(2000);
});

$(".red").on("click", function (){
  $(this).fadeOut(3000);
});

$("li").on("click", function(){
  console.log("this is li: ", $(this).html());
});

// $("button").click(function(){
//   $("input").toggle();
// });

// $("input").keyup(function(){
// var name = $(this).val();
// var fullThing = "Hello " + name;
// $("h1").text(fullThing);
// });

$("#sign-up-form").submit(function(e){
e.preventDefault();
console.log("hey: ", $("input"));

var userName = $("input[name='username']").val();
console.log("Username is: ", userName);
var password = $("input[name='password']").val();
if (userName==="ironhack" && password==="ironhack123"){
  console.log ("Good to go");
} else {
  console.log("BAD");
  } 
});