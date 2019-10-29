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
  var nameInput = document.getElementById('name');
  var isInvalid = nameInput.getAttribute('aria-invalid');

  if(isInvalid === null) {
    nameInput.setAttribute('aria-invalid', true);
  } else {
    nameInput.removeAttribute('aria-invalid');
  }

  var controls = document.querySelectorAll('.control');

  controls.forEach(function(control) {
    control.classList.toggle('has-errors');
  });

  document.getElementById('name').focus();
}