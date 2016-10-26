$(document).ready(function () {
  $('#sortBySelector').on('change', function() {
    console.log($(this).val());
    $('#waterbottles').empty()
    loadBottles();
    // slider()
  });
// loadImage();
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
    $('#minLevel').val(1)
    $('#maxLevel').val(14)
  });
}

function loadBottles(){
var levels = $("#level").val()
console.log(levels, "levels");
console.log($("#slider-range").val());
$.ajax({
  url:'http://localhost:3000/waterbottles',
  data: {
    orderBy: $('#sortBySelector').val(),
    minPhLevel:$('#minLevel').val(),
    maxPhLevel:$('#maxLevel').val()
  }
}).done(function (response) {
  // console.log(response);
  response.forEach(loadImage)
})
}


function loadImage(bottle) {
  // console.log(bottle);
  // console.log("This is the array");
  var columnDiv =$('<div />')
  columnDiv.addClass('col-sm-6 col-md-4')
  var thumbnailDiv= $('<div />')
  thumbnailDiv.addClass('thumbnail foo')

  var img = $('<img />')
  img.attr('src', 'http://localhost:3000/images/'+ bottle.imageName )

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
