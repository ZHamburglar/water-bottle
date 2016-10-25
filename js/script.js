

$(document).ready(function () {
// loadImage()
  $.ajax({
    url:'http://localhost:3000/waterbottles'
  }).done(function (response) {
    console.log(response);
    response.forEach(loadImage)
  })
})


function loadImage(bottle) {
  console.log(bottle);
  console.log("This is the array");
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




function sortPrice() {
  $('caption').each(function () {
    var data1=$(this).find(".cost").text();
    $(this).attr('', data1);
  });
}
