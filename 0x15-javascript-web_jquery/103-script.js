document.addEventListener('DOMContentLoaded', function () {
  function translateHello() {
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
  }

  $('#btn_translate').click(translateHello);

  $('#language_code').keypress(function (event) {
    if (event.which == 13) {
      translateHello();
    }
  });
});

