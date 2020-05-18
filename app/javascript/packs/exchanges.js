$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    if ($('form').attr('action') === '/convert') {
      $.ajax('/convert', {
        type: 'GET',
        dataType: 'json',
        data: {
          source_currency: $('#source_currency').val(),
          target_currency: $('#target_currency').val(),
          amount: $('#amount').val()
        },
        error: function (jqXHR, textStatus, errorThrown) {
          return alert(textStatus);
        },
        success: function (data, text, jqXHR) {
          return $('#result').val(data.value.toFixed(2))
        }
      });
    }
  });

  function api_call() {
    $('form').submit()
  }


  $("#change").click(function () {
    var targetValue = $("#target_currency").val();
    var sourceValue = $("#source_currency").val();
    $("#source_currency").val(targetValue).trigger('change');
    $("#target_currency").val(sourceValue).trigger('change');
    api_call();
  });

  $("#amount").on('input', api_call)
  $("#source_currency").on('change', api_call)
  $("#target_currency").on('change', api_call)

});
