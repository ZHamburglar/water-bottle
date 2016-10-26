$(document).ready(function () {
  $('#sortBySelector').on('change', function() {
    console.log($(this).val());
    $('#waterbottles').empty()
    loadBottles();
    // slider()
  });
// loadImage();
loadBottles();
});


// $(function slider() {
//   $("#slider-range").slider({
//     range: true,
//     min: 1,
//     max: 14,
//     values: [ 0, 14 ],
//     slide: function( event, ui ) {
//   $( "#level" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//   }
// });
// $( "#level" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
// " - $" + $( "#slider-range" ).slider( "values", 1 ) );
// });

$(function slider() {
  $("#slider-range").slider({
    range: true,
    min: 1,
    max: 14,
    values: [ 0, 14 ],
    slide: function( event, ui ) {
  $( "#level" ).val(ui.values[ 0 ] + " " + ui.values[ 1 ] );
  }
});
$( "#level" ).val($( "#slider-range" ).slider( "values", 0 ) +
" - " + $( "#slider-range" ).slider( "values", 1 ) );
});

function loadBottles(){
$.ajax({
  url:'https://waterbottle.herokuapp.com/waterbottles',
  data: {
    orderBy: $('#sortBySelector').val()
  }
}).done(function (response) {
  console.log(response);
  response.forEach(loadImage)
})
}


function loadImage(bottle) {
  console.log(bottle);
  console.log("This is the array");
  var columnDiv =$('<div />')
  columnDiv.addClass('col-sm-6 col-md-4')
  var thumbnailDiv= $('<div />')
  thumbnailDiv.addClass('thumbnail foo')

  var img = $('<img />')
  img.attr('src', 'https://waterbottle.herokuapp.com/waterbottles/images'+ bottle.imageName )

  var captionDiv=$('<div />')
  captionDiv.addClass('caption')

  var heading = $('<h3 />')
  heading.text(bottle.brand)

  var p = $('<p />')
  p.append('<strong>ph level: </strong>')
  p.append(bottle.phLevel)
  var p2= $('<p />')
  p2.append('<strong>Cost: </strong>$')
  p2.append(bottle.cost)


  captionDiv.append(heading)
  captionDiv.append(p)
  captionDiv.append(p2)

  thumbnailDiv.append(img)
  thumbnailDiv.append(captionDiv)

  columnDiv.append(thumbnailDiv)
  $("#waterbottles").append(columnDiv)
}
