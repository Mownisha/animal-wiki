$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var animalIp= parseInt($("#animal").val());
    event.preventDefault();

    if (animalIp===2)
    {
      $("#animals").hide();
      $("#cats").hide();
      $("#dogs").show();
      $("#turtles").hide();
    } else if (animalIp===3)
    {
      $("#animals").hide();
      $("#dogs").hide();
      $("#cats").show();
      $("#turtles").hide();
    } else if (animalIp===4)
    {
      $("#animals").hide();
      $("#dogs").hide();
      $("#cats").hide();
      $("#turtles").show();
    }else {
      $("#dogs").hide();
      $("#cats").hide();
      $("#turtles").hide();
      $("#animals").show();
    }

  });
});
