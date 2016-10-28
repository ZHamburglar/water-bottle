$(document).ready(function () {
  $('#sortBySelector').on('change', function() {
    console.log($(this).val());
    $('#waterbottles').empty()
    loadBottles();
  });
  initSlider()
  loadBottles();
});

function initSlider() {
  $(function slider() {
    $("#slider-range").slider({
      range: true,
      min: 1,
      max: 14,
      values: [ 1, 14 ],
      slide: function( event, ui ) {
        console.log('ui', ui);
        var values = ui.values;
        $('#minLevel').val(ui.values[0])
        $('#maxLevel').val(ui.values[1])
        loadBottles();
      }
    });
  });
}

function loadBottles(){
  console.log('loadBottles');
  console.log('minLevel', $('#minLevel').val());
  console.log('maxLevel', $('#maxLevel').val());
  $.ajax({
    url:'https://thomasfoster90.github.io/water-bottle//waterbottles',
    data: {
      orderBy: $('#sortBySelector').val(),
      minPhLevel:$('#minLevel').val(),
      maxPhLevel:$('#maxLevel').val()
    }
  }).done(function (response) {
    // console.log(response);
    $('#waterbottles').empty()



    response.forEach(loadImage)
  })
}

var myName = "H 2 Know";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}
bounceBubbles();

function loadImage(bottle) {
  // console.log(bottle);
  // console.log("This is the array");
  var columnDiv =$('<div />')
  columnDiv.addClass('col-sm-6 col-md-4')
  var thumbnailDiv= $('<div />')
  thumbnailDiv.addClass('thumbnail foo')

  var img = $('<img />')
  img.attr('src', 'https://thomasfoster90.github.io/water-bottle//images/'+ bottle.imageName )

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
