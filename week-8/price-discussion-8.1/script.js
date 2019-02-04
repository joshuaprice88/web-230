
$(':header').addClass('headline');

$('li:lt(3)').hide().fade(1500);

$('li').on('click', function() {
  $(that).remove();
});
