import { Bike } from './../js/bike.js'

$(document).ready(function(){
  $('#bikesLocation').click(function() {
    let location = $('#location').val();
    let distance = $('#distance').val();
    $('#location').val("");
    $('#distance').val("");
    let bike = new Bike();
    bike.listBikeByLocation(location, distance);
  })
})
