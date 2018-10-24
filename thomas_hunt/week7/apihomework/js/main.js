

$(document).ready(function(){


const cryptoResults = function (response){
  console.log('response', response);
  console.log(response.data);
  // console.log(response.data.length);

  // for (var i = 0; i < response.data.length; i++) {
  //   console.log(response.data[0]);
  const info = response.data;
  console.log(info.name);
  console.log(info.circulating_supply);

  const $li = $('<li class = result>').html(info.name);
    $('.title span').html(info.name)
    $('.Supply span').html(info.circulating_supply)
    $('.Price span').html(info.quotes.USD.price)
    $('.cap span').html(info.quotes.USD.market_cap)
    $('.rank span').html(info.rank)

};



const performSearch = function(searchTerm){
  const url = `https://api.coinmarketcap.com/v2/ticker/${searchTerm}/`;
  console.log(url);
  $.getJSON(url)
  .done(cryptoResults)
  .fail(function(err){
    console.warn(err.statusText);
  });

};//perform search


$('#searchForm').on('submit', function(){
  const query = $('#query').val();
  console.log(query);
  performSearch(query);
  $('#hide').show();


  return false;


});//searchFOrm





});//end of doc ready
