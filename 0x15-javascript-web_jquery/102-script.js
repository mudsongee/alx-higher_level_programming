document.addEventListener('DOMContentLoaded', function () {
  // Function to fetch and display the translation
  $('#btn_translate').click(function () {
    const languageCode = $('#language_code').val();

    $.ajax({
      url: 'https://www.fourtonfish.com/hellosalut/hello/',
      type: 'GET',
      data: { lang: languageCode },
      success: function (response) {
        $('#hello').text(response.hello);
      },
      error: function (error) {
        $('#hello').text('Error: Language code not found');
      },
    });
  });
});

