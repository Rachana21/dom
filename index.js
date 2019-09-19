var submit = $('.name-input');
var message = $('.message');

submit.on('click', printText);

function printText()
{
  var name = $('.name-input').val();
  console.log(name);
  message.text(name);
}
