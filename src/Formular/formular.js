class Formular {
  constructor(app) {
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
      });

      await fileReader.readAsDataURL(file);
    }
  }

  _onFormSubmitClicked(event) {
    event.preventDefault();
    console.log("Vorname: ", event.target.firstname.value);
    console.log("Nachname: ", event.target.lastname.value);
    console.log("Email: ", event.target.email.value);
    console.log("Telefon: ", event.target.tel.value);
    console.log("Wohnfläche: ", event.target.flaeche.value);
    console.log("Zimmer: ", event.target.zimmer.value);
    console.log("Preis: ", event.target.preis.value);
    console.log("Nebenkosten: ", event.target.nk.value);
    console.log("Beschreibung: ", event.target.beschreibung.value);


  }
}
