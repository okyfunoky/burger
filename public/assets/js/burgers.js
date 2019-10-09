// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("eaten");
  
      var eatenState = {
        eaten: !eaten
      };
      console.log("Devouring " + id)
      console.log("Devouring " + eaten)
      // Send the PUT request.
      $.ajax({
        url: "/api/burgers/"+id,
        type: 'PUT',
        data: eatenState,
      }).then(
        function() {
          console.log("changed eaten to", eaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        
        name: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.post("/api/burgers", newBurger).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.DELETE("/api/burger/" + id).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  