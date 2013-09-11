$(document).ready(function() {
  $('button.awesomeness_teller').on('click', function() {
    var awesomeRating = $(this).data("heading");
    $('#awesomeness_holder').text(awesomeRating);
  });

  $('button.skill_teller').on('click', function() {
    var getUrlSkill = window.location.pathname;
    var getSkill = getUrlSkill.match(/\w+$/);

    $("#skill_holder").text(getSkill);
  });

  $('button.meal_teller').on('click', function() {
    // Your code uses a global javascript object 
    // provided by the server without requiring
    // an ajax request.
  });

});
