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
    startTime();
    document.getElementById("inputform").focus();
  };

  document.getElementById("body").addEventListener('mouseout', function() {
    document.getElementById("inputform").focus();
  });
  

  function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);

  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }