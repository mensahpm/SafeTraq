//This is the XML HTTP Request for the camera upload

var input = document.querySelector('input[type=file]'); 

input.onchange = function () {
  var file = input.files[0];
  
  upload(file);
  drawOnCanvas(file)
  displayAsImage(file);
  
};

function upload(file) {
  var form = new FormData(),
      xhr = new XMLHttpRequest();

  form.append('image', file);
  xhr.open('post', 'server.php', true);
  xhr.send(form);
}

//This displays the captured image file.

function displayAsImage(file) {
  var imgURL = URL.createObjectURL(file),
      img = document.createElement('img');

  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };

  img.src = imgURL;
  document.body.appendChild(img);
}