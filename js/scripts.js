
$(document).ready(function(){
  
  $("#formOne").submit(function(e){
    e.preventDefault();
    var number = $("#favoritenumber").val();
    var favoriteColor = $("#favoritecolor").val();
    
    var favoriteFood = $("#favoritefood").val();
    var favoriteSubject =$("input:radio[name=favoritesubject]:checked").val();
    var birthdate = $("#dateofbirth").val();



    $(".favoritenumber").text(number);
    $(".favoritefood").text(favoriteFood);
    $(".favoritesubject").text(favoriteSubject);
    $(".favoritecolor").css({
      "backgroundColor": favoriteColor,
      "height":"25px",
      "width":"25px"
    });
    $(".birthdate").text(birthdate);

    $(".survey-results").show();
    debugger;
  });

});


