var sportsCar = ['Lamborghini', 'Ferrari', 'Porsche 911', 'Audi TT', 'Maserati', 'BMW M3', 'Ford Mustang', 'Chevy Camero', 'Nissan GTR', 'Lexus RC'];


$(document).ready(function() {

// create buttons for each sportscar and then render to HTML

function renderButtons() {

    $('#carButton').empty();
    
    // Looping through the array of cars
    for (var i = 0; i < sportsCar.length; i++) {
        // console.log(sportsCar[i]);
      // Then dynamicaly generating buttons for each car in the array
      var a = $('<button>');
      // Adding a class of car to our button
      a.addClass('car');
      // Adding a data-attribute
      a.attr('data-name', sportsCar[i]);
      // Providing the initial button text
      a.text(sportsCar[i]);
      // Adding the button to the buttons-view div
      $('#carButton').append(a);
    }
  }
    renderButtons();
  
  // This function handles events when a car button is clicked
 
  $('#add-car').on('click', function() {
    // This line grabs the input from the textbox
    var car = $('#car-input').val().trim();
     // Adding car from the textbox to our array
    sportsCar.push(car);
    renderButtons();
    return false;
  });

  //displays the giphy images

  $(document).on('click', function() {
  
  $("#carImages").empty();
  
  var a = $(this).attr('data-name');
  // var apiKey = "L7AcBNBpJoXhk4n3G6tfG051LWUOMI9x";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + a + "&api_key=dc6zaTOxFJmzC&limit=12";
    
    $.ajax({
        url: queryURL,
        method: 'GET'
      })
    
      .done(function(response) {
          console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++){
          var carDiv = $('<div class="item">');
          var rating = results[i].rating;
          var rate = $('<p>').text("Rating: " + rating)
          var gifImage = $('<img>');
          gifImage.attr('src', results[i].images.fixed_height_still.url)
		            .attr('data-still', results[i].images.fixed_height_still.url)
		            .attr('data-animate', results[i].images.fixed_height.url)
		            .attr('data-state', "still")
		            .addClass("showImage");
         $('#carImages').prepend(carDiv);
        
        
        }
    });

});


});