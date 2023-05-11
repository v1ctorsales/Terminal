window.onload = function() {
    document.getElementById("inputform").focus();
  };

  document.getElementById("body").addEventListener('click', function() {
    document.getElementById("inputform").focus();
    window.scrollTo(0, document.body.scrollHeight);
  });