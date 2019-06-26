const myForm = document.querySelector("form");

//récup des données du localStorage
if (localStorage.quidam) {
  var quidam = JSON.parse(localStorage.quidam);
  for (property in quidam) {
    if (property != "fruits") {
      if (document.querySelector(`[name=${property}]`)) {
        document.querySelector(`[name=${property}]`).value = quidam[property];
      }
    } else {
      fruit = quidam[property];

      if (document.querySelector(`input[value='${fruit}']`)) {
        document.querySelector(`input[value='${fruit}']`).checked = "checked";
        //console.log(document.querySelector(`input[value='${fruit}']`))
      }
    } //fruits
  }
}

//Alimenttion du localStorage
myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  page = myForm.dataset.page;
  //alert(page)

  let formData = new FormData(myForm);

  //si il y a du localStorage, on en garde le contenu
  if (typeof quidam != "undefined") {
    dataJson = quidam;
  } else {
    // pas de localStorage, on crée un objet vide
    dataJson = new Object();
  }

  for (value of formData.entries()) {
    dataJson[value[0]] = value[1];
  }
  localStorage.quidam = JSON.stringify(dataJson);
  if (page == 1) {
    location.replace("commande.html");
  }
});
