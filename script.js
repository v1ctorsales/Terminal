function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "help") {
      alert("Ok");
      return false;
    }
    else {
        alert("Comando inválido");
    }
  }