var sportsCar = ['Lamborghini', 'Ferrari', 'Porsche 911', 'Audi TT', 'Maserati', 'BMW M3', 'Ford Mustang', 'Chevy Camero', 'Nissan GTR', 'Lexus RC'];


// $(document).ready(function() {

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

    event.preventDefault();

    // This line grabs the input from the textbox
    var car = $('#car-input').val().trim();
     // Adding car from the textbox to our array
    sportsCar.push(car);
    renderButtons();
    return false;
  });

  //displays the giphy images

  $('#carButton').on('click', function() {
    
    var cars = $(this).attr('data-cars'); 
    var apiKey = "L7AcBNBpJoXhk4n3G6tfG051LWUOMI9x";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cars + "&api_key=" + apiKey + "&limit=10";
    console.log(queryURL);
    
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      $('#carImages').empty();

      var results = response.data;
      for (var i = 0; i < results.length; i++) {
      // console.log(results);
      
      var gifDiv = $("<div class='item'>");

      // Storing the result item's rating
      var rating = results[i].rating;

      // Creating a paragraph tag with the result item's rating
      var p = $("<p>").text("Rating: " + rating);

      // Creating an image tag
      var carImage = $("<img>");

      // Giving the image tag an src attribute of a proprty pulled off the
      carImage.attr("src", results[i].images.fixed_height.url);

      // Appending the paragraph and carImage created to the "gifDiv" div created
      gifDiv.append(p);
      gifDiv.append(carImage);

      // Prepending the gifDiv to the "#carImages" div in the HTML
      $("#carImages").prepend(gifDiv);
    }
  })
});
