$(document).ready(function() {
  $('button.awesomeness_teller').on('click', function() {
    var awesomeRating = $(this).data("heading");
    $('#awesomeness_holder').text(awesomeRating);
  });

  $('button.skill_teller').on('click', function() {
    console.log("I'm here");
    var getUrlSkill = window.location.pathname;
    var getSkill = getUrlSkill.match(/\w+$/);

    $("#skill_holder").text(getSkill);
  });

  $('button.meal_teller').on('click', function() {
    var chooseMeal = Math.floor(Math.random()*8);
    $('#meal_holder').text(meals[chooseMeal]);
  });

});
