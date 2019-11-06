class Suche {
  constructor(app) {
    this._app = app;
  }

  async show () { // Code vom Server Laden
    let html = await fetch ("Suche/suche.html");
    let css = await fetch ("Suche/suche.css");

    if (html.ok && css.ok){
      html = await html.text();
      css = await css.text();
    } else {
      console.error("Fehler beim Laden des HTML/CSS-Inhalts");
    }

    // Seite anzeigen

    let pageDom = document.createElement("div");
    pageDom.innerHTML = html

    this._app.setPageTitle("Suchergebnisse", {isSubPage: true});
    this._app.setPageCss(css);
    this._app.setPageHeader(pageDom.querySelector("header"));
    this._app.setPageContent(pageDom.querySelector("main"));
  }
}
