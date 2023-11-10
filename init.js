document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 38:
          SetaCima();
          break;
      case 40:
          SetaBaixo();
          break;
  }
};

window.onload = function() {
    document.getElementById("inputform").focus();
  };

  document.getElementById("body").addEventListener('mouseout', function() {
    document.getElementById("inputform").focus();
  });
  