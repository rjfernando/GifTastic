$(document).ready(function() {

var sportsCar = ['Lamborghini', 'Ferrari', 'Porsche 911', 'Audi TT', 'Maserati', 'BMW M3', 'Ford Mustang', 'Chevrolet Camaro', 'Nissan GTR', 'Lexus RC'];

// create buttons for each sportscar and then render to HTML

function renderButtons() {

    $('#carButton').empty();
    
    // Looping through the array of cars
    for (var i = 0; i < sportsCar.length; i++) {
        console.log(sportsCar[i]);
      
        // Then dynamicaly generating buttons for each car in the array
      var giphyButton = $('<button>');
      // Adding a class of car to our button
      giphyButton.addClass('car');
      // Adding a data-attribute
      giphyButton.attr('car-name', sportsCar[i]);
      // Providing the initial button text
      giphyButton.text(sportsCar[i]);
      // Adding the button to the buttons-view div
      $('#carButton').append(giphyButton);
    }
  }
    renderButtons();
  
  // This function handles events when a new car is submitted

$('#add-car').on('click', function() {

      event.preventDefault();
      
      var car = $('#car-input').val().trim();
      if (car !== "") {
      sportsCar.push(car);
      renderButtons();
      return false;
      }
});

  //displays the giphy images

  $('.car').on('click', function() {
    
    var cars = $(this).attr('car-name'); 
    var apiKey = 'L7AcBNBpJoXhk4n3G6tfG051LWUOMI9x';
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
      console.log(results);
      
      var gifDiv = $("<div class='item'>");

      // Storing the result item's rating
      var rating = results[i].rating;

      // Creating a paragraph tag with the result item's rating
      var paragraph = $('<p>').text('Rating: ' + rating);

      // Creating an image tag
      var carImage = $('<img>');
     
      // Giving the image tag an attributes of a proprty to be pulled
      carImage.attr('src', results[i].images.fixed_height.url);
      carImage.attr('data-still',results[i].images.fixed_height_small_still.url); 
      carImage.attr('data-animate',results[i].images.fixed_height_small.url); 
      carImage.attr('data-state', 'still');
      carImage.addClass('car-image');

      // Appending the paragraph and carImage created to the "gifDiv" div created
      gifDiv.append(paragraph);
      gifDiv.append(carImage);

      // Prepending the gifDiv to the '#carImages' div in the HTML
      $('#carImages').prepend(gifDiv);
    }
  });
});  

$(document).on('click', '.item', function(){
    var state = $(this).attr('data-state');
        if (state === 'still'){
            $(this).attr('src', $(this).attr('data-animate'))
            .attr('data-state','animate');  
        } else{
            $(this).attr('src', $(this).attr('data-still'))
            .attr('data-state','still'); 
        }
    });
});

//couldn't get the animate and still function to work
//new car added would not change the giphy image

