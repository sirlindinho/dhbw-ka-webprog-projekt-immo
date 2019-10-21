// Neue Datei für Klasse PageNotFound
class PageNotFound {
  constructor(app) {
    this._app = app;
  }

  async show () { // Code vom Server Laden
    let html = await fetch ("page-not-found/page-not-found.html");
    let css = await fetch ("page-not-found/page-not-found.css");

    if (html.ok && css.ok){
      html await html.text();
      css await css.text();
    } else {
      console.error("Fehler beim Laden des HTML/CSS-Inhalts");
    }

    // Seite anzeigen

    let pageDom = document.createELement("div");
    pageDom.innerHTML = html;

    this_app.setPageTitle("Seite nicht gefunden");
    this_app.setPageCss(css);
    this_app.setPageHeader(pageDom.querySelector("header"));
    this_app.setPageContent(pageDom.querySelector("main"));


  }
}
