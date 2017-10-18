import { Bike } from './../js/bike.js'

$(document).ready(function(){
    let bike = new Bike();
  $('#bikesLocation').click(function() {
    let location = $('#location').val();
    let distance = $('#distance').val();
    $('#location').val("");
    $('#distance').val("");

    bike.listBikeByLocation(location, distance);

  })

  $('#bikesManufacturer').click(function () {
    let manufacturer = $('#manufacturer').val();
    bike.listBikeByManufacturer(manufacturer);
  })

  // $('#bikesYear').click(function () {
  //   let year = $('#year').val();
  //   bike.listBikeByYear(year);
  // })
})
