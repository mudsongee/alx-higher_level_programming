#!/usr/bin/node
const $ = window.$;

$(document).ready(function () {
  // Function to fetch and display the translation
  function translateHello () {
    const languageCode = $('#language_code').val();

    $.getJSON({
      //url: 'https://hellosalut.stefanbohacek.dev/',
      url: 'https://www.fourtonfish.com/hellosalut/hello/',
      type: 'GET',
      data: { lang: languageCode },
      success: function (response) {
        $('#hello').text(response.hello);
      },
      error: function (error) {
        $('#hello').text('Error: Language code not found');
      }
    });
  }

  // Trigger translation when the "Translate" button is clicked
  $('#btn_translate').on('click', translateHello);

  // Trigger translation when "Enter" key is pressed in the input field
  $('#language_code').on('keypress', function (event) {
    if (event.which === 13) {
      translateHello();
    }
  });
});

