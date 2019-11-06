class Formular {

  constructor(app) {
    var firebaseConfig = {
    apiKey: "AIzaSyANzNCm5l4rrBzV5Ki0iJEZNjz-6ga4SI4",
    authDomain: "immo-webprog-2019.firebaseapp.com",
    databaseURL: "https://immo-webprog-2019.firebaseio.com",
    projectId: "immo-webprog-2019",
    storageBucket: "immo-webprog-2019.appspot.com",
    messagingSenderId: "249226224804",
    appId: "1:249226224804:web:5861c61756df569252f231",
    measurementId: "G-FJDCMVG1JY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref('messages');
  var storageRef = firebase.storage();

    this._app = app;
  }

  async show () { // Code vom Server Laden
    let html = await fetch ("Formular/formular.html");
    let css = await fetch ("Formular/formular.css");

    if (html.ok && css.ok){
      html = await html.text();
      css = await css.text();
    } else {
      console.error("Fehler beim Laden des HTML/CSS-Inhalts");
    }

    // Seite anzeigen

    let pageDom = document.createElement("div");
    pageDom.innerHTML = html;

    let formElement = pageDom.querySelector("form");
    formElement.addEventListener("submit", this._onFormSubmitClicked);

    let imageUploadButton = pageDom.querySelector("#ImageUploadButton");
    imageUploadButton.addEventListener("click", this._onImageUploadClicked);

    this._app.setPageTitle("Immobilie hinzufügen", {isSubPage: true});
    this._app.setPageCss(css);
    this._app.setPageHeader(pageDom.querySelector("header"));
    this._app.setPageContent(pageDom.querySelector("main"));
  }
  // Bild
    async _onImageUploadClicked(event) {
    let fileUploadElement = document.querySelector("input[name='fileupload']");

    for (let i = 0; i < fileUploadElement.files.length; i++) {
      let file = fileUploadElement.files[i];
      let fileReader = new FileReader();

      fileReader.addEventListener("load", () => {
        console.log("Dateiname: ", file.name);
        console.log("MIME-Typ: ", file.type);
        console.log("Data-URL: ", fileReader.result);
        // Data-URL in der Datenbank ablegen
        // Später die Date-URL als <img href="..."> anzeigen
        var storage = firebase.storage();
        var storageRef = firebase.storage().ref('Immobilien/');
        var fileUpload = document.getElementById('fileUpload');
        var uploadTask = storage.ref('Immobilien/' + file.name);
          uploadTask.put(file);
      });
    await fileReader.readAsDataURL(file);

  }
}
  // Formular

  _onFormSubmitClicked(event) {
    event.preventDefault();
    var firstname = getInputValues('firstname');
    var lastname = getInputValues('lastname');
    var email = getInputValues('email');
    var tel = getInputValues('tel');
    var flaeche = getInputValues('flaeche');
    var zimmer = getInputValues('zimmer');
    var preis = getInputValues('preis');
    var nk = getInputValues('nk');
    var beschreibung = getInputValues('beschreibung');

    saveMessage (firstname, lastname, email, tel, flaeche, zimmer, preis, nk, beschreibung);

  function getInputValues(id) {
    return document.getElementById(id).value;
}

// Nachricht speichern
 function saveMessage (firstname, lastname, email, tel, flaeche, zimmer, preis, nk, beschreibung){
  var messagesRef = firebase.database().ref('messages');
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      firstname: firstname,
      lastname: lastname,
      email: email,
      telefon: tel,
      flaeche: flaeche,
      zimmer: zimmer,
      preis: preis,
      nk: nk,
      beschreibung: beschreibung
      });
    }
  // Benachrichtigung
  document.querySelector('.alert').style.display= 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display= 'none';
  }, 5000)
  document.getElementById('immoformular').reset();
}
}
