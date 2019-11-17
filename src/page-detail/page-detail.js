"use strict";

/**
 * Klasse PageDetail: Stellt die Detailseite der App zur Verfügung
 */
class PageDetail {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
        this._recordId = -1;
        this._data = null;
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    async show(matches) {
        // URL-Parameter auswerten
        this._recordId = matches[1];
        console.log(matches[1]);

        // Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("page-detail/page-detail.html");
        let css = await fetch("page-detail/page-detail.css");

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts");
            return;
        }

        // Seite zur Anzeige bringen
        let pageDom = this._processTemplate(html, matches[1]);


        this._app.setPageTitle(`ImmoFinder ${"Immobilie " + matches[1]}`, {isSubPage: true});
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));

        document.getElementById("detail-paragraph").style.display="none";
    }

     /**
     * Hilfsmethode, welche den HTML-Code der eingelesenen HTML-Datei bearbeitet
     * und anhand der eingelesenen Daten ergänzt. Zusätzlich wird hier ein
     * Event Handler für den Button registriert.
     *
     * @param {HTMLElement} pageDom Wurzelelement der eingelesenen HTML-Datei
     * mit den HTML-Templates dieser Seite.
     */
    _processTemplate(html, number) {

        // Platzhalter mit den eingelesenen Daten ersetzen
        //html = html.replace(/{IMG}/g, this._data.img);
        if(number == 1){
        html = html.replace(/{IMG}/g, "immobilien/1.jpg");
        html = html.replace(/{NAME}/g, "Einfamilienhaus");
        html = html.replace(/{PREIS}/g, "1200€");
        html = html.replace(/{NK}/g, "200€");
        html = html.replace(/{BAUJAHR}/g, "1990");
        html = html.replace(/{STADTTEIL}/g, "Waldstadt");}

        else if(number == 2){
            html = html.replace(/{IMG}/g, "immobilien/2.jpg");
            html = html.replace(/{NAME}/g, "Einfamilienhaus");
            html = html.replace(/{PREIS}/g, "1200€");
            html = html.replace(/{NK}/g, "200€");
            html = html.replace(/{BAUJAHR}/g, "1990");
            html = html.replace(/{STADTTEIL}/g, "Waldstadt");
        }

        else if(number == 3){
            html = html.replace(/{IMG}/g, "immobilien/3.jpg");
            html = html.replace(/{NAME}/g, "Einfamilienhaus");
            html = html.replace(/{PREIS}/g, "1200€");
            html = html.replace(/{NK}/g, "200€");
            html = html.replace(/{BAUJAHR}/g, "1990");
            html = html.replace(/{STADTTEIL}/g, "Waldstadt");
        }

        else if(number == 4){
            html = html.replace(/{IMG}/g, "immobilien/4.jpg");
            html = html.replace(/{NAME}/g, "Einfamilienhaus");
            html = html.replace(/{PREIS}/g, "1200€");
            html = html.replace(/{NK}/g, "200€");
            html = html.replace(/{BAUJAHR}/g, "1990");
            html = html.replace(/{STADTTEIL}/g, "Waldstadt");
        }

        else if(number == 5){
            html = html.replace(/{IMG}/g, "immobilien/5.jpg");
            html = html.replace(/{NAME}/g, "Einfamilienhaus");
            html = html.replace(/{PREIS}/g, "1200€");
            html = html.replace(/{NK}/g, "200€");
            html = html.replace(/{BAUJAHR}/g, "1990");
            html = html.replace(/{STADTTEIL}/g, "Waldstadt");
        }

        else if(number == 6){
            html = html.replace(/{IMG}/g, "immobilien/6.jpg");
            html = html.replace(/{NAME}/g, "Einfamilienhaus");
            html = html.replace(/{PREIS}/g, "1200€");
            html = html.replace(/{NK}/g, "200€");
            html = html.replace(/{BAUJAHR}/g, "1990");
            html = html.replace(/{STADTTEIL}/g, "Waldstadt");
        }

        else if(number == 7){
            html = html.replace(/{IMG}/g, "immobilien/7.jpg");
            html = html.replace(/{NAME}/g, "Einfamilienhaus");
            html = html.replace(/{PREIS}/g, "1200€");
            html = html.replace(/{NK}/g, "200€");
            html = html.replace(/{BAUJAHR}/g, "1990");
            html = html.replace(/{STADTTEIL}/g, "Waldstadt");
        }

        else if(number == 8){
            html = html.replace(/{IMG}/g, "immobilien/8.jpg");
            html = html.replace(/{NAME}/g, "Einfamilienhaus");
            html = html.replace(/{PREIS}/g, "1200€");
            html = html.replace(/{NK}/g, "200€");
            html = html.replace(/{BAUJAHR}/g, "1990");
            html = html.replace(/{STADTTEIL}/g, "Waldstadt");
        }

        // HTML-Template in echte DOM-Objekte umwandeln, damit wir es mit den
        // DOM-Methoden von JavaScript weiterbearbeiten können
        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;

        // Event Handler für den Button registrieren
        pageDom.querySelectorAll(".id").forEach(e => e.textContent = this._recordId);
        pageDom.querySelector("#show-more-button").addEventListener("click", () => this._onShowMoreButtonClicked());

        pageDom.querySelector("#detailbeschreibung-button").addEventListener("click", () => this._onDetailbeschreibungButtonClicked());

        // Fertig bearbeitetes HTML-Element zurückgeben
        return pageDom;
    }

    /**
     * Beispiel für einen einfachen Event Handler, der bei Klick auf einen
     * Button aufgerufen wird.
     */
    _onShowMoreButtonClicked() {
        //alert(this._data.name);
        document.getElementById("übersicht-paragraph").style.display="block";
        document.getElementById("detail-paragraph").style.display="none";
        document.getElementById("show-more-button").classList.add('active');
        document.getElementById("detailbeschreibung-button").classList.remove('active');
    }

    _onDetailbeschreibungButtonClicked(){
        //alert(this._data.name);
        document.getElementById("übersicht-paragraph").style.display="none";
        document.getElementById("detail-paragraph").style.display="block";
        document.getElementById("detailbeschreibung-button").classList.add('active');
        document.getElementById("show-more-button").classList.remove('active');
    }
}
