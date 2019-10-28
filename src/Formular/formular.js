"use strict";

class Formular {

async show(matches) {
    // URL-Parameter auswerten
    this._recordId = matches[1];
    this._data = this._app.database.getRecordById(this._recordId);

    // Anzuzeigenden Seiteninhalt nachladen
    let html = await fetch("Formular/formular.html");
    let css = await fetch("Formular/formular.css");

    if (html.ok && css.ok) {
        html = await html.text();
        css = await css.text();
    } else {
        console.error("Fehler beim Laden des HTML/CSS-Inhalts");
        return;
    }

    // Seite zur Anzeige bringen
    let pageDom = this._processTemplate(html);

    this._app.setPageTitle(`Segelschiff ${this._data.name}`, {isSubPage: true});
    this._app.setPageCss(css);
    this._app.setPageHeader(pageDom.querySelector("header"));
    this._app.setPageContent(pageDom.querySelector("main"));
 }
}
