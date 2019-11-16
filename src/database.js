"use strict";

/**
 * Klasse Database: Kümmert sich um die Datenhaltung der App
 *
 * Diese Klasse beinhaltet alle Datensätze der App. Entgegen dem Namen handelt
 * es sich nicht wirklich um eine Datenbank, da sie lediglich ein paar statische
 * Testdaten enthält. Ausgefeilte Methoden zum Durchsuchen, Ändern oder Löschen
 * der Daten fehlen komplett, könnten aber in einer echten Anwendung relativ
 * einfach hinzugefügt werden.
 */
class Database {
    /**
     * Konstruktor.
     */
    constructor() {
        this._data = [
            {
                id:          1,
                img:        "immobilien/1.jpg",
                name:       "Villa mit Schwimmteich",
                typ:        "Einfamilienhaus",
                baujahr:    2016,
                stadtteil:   "Karlsruhe Weststadt",
                link:       "https://de.wikipedia.org/wiki/Petrine",
            },{
                id:          2,
                img:        "immobilien/2.jpg",
                name:       "Einfamilienhaus mit Glasfront",
                typ:        "Einfamilienhaus",
                baujahr:    2018,
                stadtteil:   "Karlsruhe Oststadt",
                link:       "https://de.wikipedia.org/wiki/Falado_von_Rhodos",
            },{
                id:          3,
                img:        "immobilien/3.jpg",
                name:       "Zweifamilienhaus mit Pool und Garage",
                typ:        "Zweifamilienhaus",
                baujahr:    2015,
                stadtteil:   "Stutensee",
                link:       "https://de.wikipedia.org/wiki/Gorch_Fock_(Schiff,_1958)",
            },{
                id:          4,
                img:        "immobilien/4.jpg",
                name:       "Villa mit Garten und Pool",
                typ:        "Einfamilienhaus,
                baujahr:    2018,
                stadtteil:   "Karlsruhe Nordstadt",
                link:       "https://de.wikipedia.org/wiki/Mare_Frisium",
            },{
                id:          5,
                img:        "immobilien/5.jpg",
                name:       "Haus mit Doppelgarage",
                typ:        "Einfamilienhaus",
                baujahr:    2010,
                stadtteil:   "Karlsruhe Durlach",
                link:       "https://de.wikipedia.org/wiki/Preu%C3%9Fen_(Schiff,_1902)",
            },{
                id:          6,
                img:        "immobilien/6.jpg",
                name:       "Doppelhaus mit Terasse und Garten",
                typ:        "Zweifamilienhaus",
                baujahr:    2011,
                stadtteil:   "Karlsruhe Oststadt",
                link:       "https://de.wikipedia.org/wiki/HMS_Victory",
            },{
                id:          7,
                img:        "immobilien/7.jpg",
                name:       "Haus mit Pool und Terasse",
                typ:        "Einfamilienhaus",
                baujahr:    2012,
                stadtteil:   "Karlsruhe Südstadt",
                link:       "https://de.wikipedia.org/wiki/Schulschiff_Deutschland",
            },
        ];
    }

    /**
     * Diese Methode sucht einen Datensazt anhand seiner ID in der Datenbank
     * und liefert den ersten, gefundenen Treffer zurück.
     *
     * @param  {Number} id Datensatz-ID
     * @return {Object} Gefundener Datensatz
     */
    getRecordById(id) {
        id = parseInt(id);
        return this._data.find(r => r.id === id);
    }

    /**
     * Diese Methode gibt eine Liste mit allen Datensätzen zurück.
     * @return {Array} Liste aller Datensätze
     */
    getAllRecords() {
        return this._data;
    }
}
