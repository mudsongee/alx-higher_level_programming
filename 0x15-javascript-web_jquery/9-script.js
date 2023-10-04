$(document).ready(function () {
  //$.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function (data) {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data) {
    $('#hello').text(data.hello);
  });
});
