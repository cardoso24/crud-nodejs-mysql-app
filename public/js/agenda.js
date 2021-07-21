function fixStepIndicator(n) {
  // Esta função remove a classe "ativa" de todos os steps ...
  var i, x = document.getElementsByClassName("bolaOk");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... e adiciona a classe "ativa" ao step atual:
  x[n].className += " active";
}
/*icone*/
function fixStepIndicator2(n) {
  // Esta função remove a classe "ativa" de todos os steps ...
  var i, x = document.getElementsByClassName("step-selection");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //...  e adiciona a classe "ativa" ao step atual:
  x[n].className += " active";
}
/*border*/
function fixStepIndicator2(n) {
  // Esta função remove a classe "ativa" de todas as etapas ...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //...  e adiciona a classe "ativa" ao step atual:
  x[n].className += " active";
}
