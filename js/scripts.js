
$(document).ready(function(){
  $("#formOne").submit(function(e){
    var number = $("#favoritenumber").val();
    var favoriteColor = $("#favoritecolor").val();
    var favoriteFood = $("#favoritefood").val();
    var favoriteSubject =$("input:radio[name=favoritesubject]:checked").val();
    var birthdate = $("#dateofbirth").val();

    $(".survey-results").show();
})

