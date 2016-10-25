$(document).ready(function () {
// loadImage()
})
var bottles={
  url:'http://localhost:3000/waterbottles'
};
var request = $.ajax(bottles);
request.done(function (response) {
console.log(response);
response.forEach(loadImage)
})


function loadImage(bottle) {
  // <div class="col-sm-6 col-md-4">
  //   <div class="thumbnail foo">
  //     <img src="http://placehold.it/275x125" alt="">
  //     <div class="caption">
  //       <h3>Dasani</h3>
  //       <p><strong>ph level: </strong>7</p>
  //       <p><strong>Cost: </strong>$3</p>
  //     </div>
  //   </div>
  // </div>
  var columnDiv =$('<div />')
  columnDiv.addClass('col-sm-6 col-md-4')
  var thumbnailDiv= $('<div />')
  thumbnailDiv.addClass('thumbnail foo')

  var img = $('<img />')
  img.attr('src', 'http://placehold.it/275x125')

  var captionDiv=$('<div />')
  captionDiv.addClass('caption')

  var heading = $('<h3 />')
  heading.text(bottle.brand)

  var p = $('<p />')
  p.append('<strong>ph level: </strong>')
  p.append(bottle.phLevel)

  var p2= $('<p />')
  p.append('<strong>Cost: </strong>$')
  p.append(bottle.cost)


  captionDiv.append(heading)
  captionDiv.append(p)
  captionDiv.append(p2)

  thumbnailDiv.append(img)
  thumbnailDiv.append(captionDiv)

  columnDiv.append(thumbnailDiv)

}
