window.addEventListener('DOMContentLoaded', function(e) {
  var buttons = document.querySelectorAll('form .buttons');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      showErrors();
    });
  });
});

function showErrors() {
  var controls = document.querySelectorAll('.control');

  controls.forEach(function(control) {
    control.classList.toggle('has-errors')
  });
}