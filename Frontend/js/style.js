$( document ).ready(function() {
  
  $(".dropdown-button").dropdown();

  $(".button-collapse").sideNav();

  $('.parallax').parallax();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 20, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  $('select').material_select();

})