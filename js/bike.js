export class Bike{
constructor(){}
  listBikeByLocation(location, distance){
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=proximity`).then(function(response){
      let list = response.bikes
      list.forEach(function(bike){
        $('.showBikes').append('<li>' + bike.title + '</li>');
      });
    });

  }
}
