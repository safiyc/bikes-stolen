export class Bike{
constructor(){
}
  listBikeByLocation(location, distance){
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=proximity`).then(function(response){
      let list = response.bikes
      list.forEach(function(bike){
        $('.showBikes').append('<li>' + bike.title + '</li>');
      });
    });

  }

  listBikeByManufacturer(manufacturer){
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacturer}`).then(function(response){
      let list = response.bikes
      list.forEach(function(bike){
        $('.showBikesMan').append('<li>' + bike.title + '  ' + bike.manufacturer_name + '</li>');
      });
    });
  }

  // listBikeByYear(year){
  //   $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&year=${year}`).then(function(response){
  //     let list = response.bikes
  //     list.forEach(function(bike){
  //       $('.showBikesYear').append('<li>' + bike.title + ' ' + bike.year + '</li>');
  //     });
  //   });
  // }
}
