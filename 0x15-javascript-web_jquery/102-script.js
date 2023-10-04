$(document).ready(function () {
  $('INPUT#btn_translate').click(function () {
    const languageCode = $('INPUT#language_code').val();
    $.getJSON({
      //url: 'https://hellosalut.stefanbohacek.dev/',
      url: 'https://www.fourtonfish.com/hellosalut/hello/',
      data: { lang: languageCode },
      method: 'GET',
      success: function (data) {
        $('DIV#hello').text(data.hello);
      },
      error: function (error) {
        $('DIV#hello').text('Error: Language code not found');
      },
    });
  });
}); 