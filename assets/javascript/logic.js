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
  // This function handles events when a car button is clicked
  $('#add-car').on('click', function() {
    // This line grabs the input from the textbox
    var car = $('#car-input').val().trim();
     // Adding car from the textbox to our array
    sportsCar.push(car);
    renderButtons();
    return false;
  
})

//   // Adding a click event listener to all elements with a class of "movie"
//     $(document).on("click", ".movie", displayMovieInfo);

  // Calling the renderButtons function to display the intial buttons
    renderButtons();


});