/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt
 */
export class Teilnehmer {

    // Ergänzen Sie hier die Felddeklarationen
    private letzteTeilnehmer: number | null = null;
    private vorletzteTeilnehmer: number | null = null;

    constructor() {
        // Initialisieren Sie hier die Felder
    }

    // Implementieren Sie die hier vorgegebenen Methoden:

    /**
     * Gibt die zuletzt registrierte Teilnehmerzahl zurück.
     * @returns Die letzte registrierte Teilnehmerzahl.
     * @throws Fehler, falls keine Teilnehmerzahl registriert ist.
     */
    getLetzteTeilnehmer(): number {
        if (this.letzteTeilnehmer === null) {
            throw new Error("A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.");
        }
        return this.letzteTeilnehmer;
    }

    /**
     * Registriert eine neue Teilnehmerzahl und aktualisiert die letzte Teilnehmerzahl.
     * @param teilnehmer Die zu registrierende Teilnehmerzahl.
     * @throws Fehler, falls die Teilnehmerzahl ungültig ist (kleiner 0 oder größer 9999) ps: vom tests herausgefunden.
     */
    registriereNeueTeilnehmer(teilnehmer: number): void {
        if (teilnehmer < 0 || teilnehmer > 9999) {
            throw new Error("Teilnehmerzahl muss zwischen 0 und 9999 liegen.");
        }

        // diese Zeilen wurden beim aufgabe 3.4 (entwicklung) hinzugefügt und angespasst 
        this.vorletzteTeilnehmer = this.letzteTeilnehmer; 
        this.letzteTeilnehmer = teilnehmer;
    }
    // Ergänzen Sie hier die fehlenden Methoden:

     /**
     * Gibt die Entwicklung der Teilnehmerzahl zurück: -1 (weniger), 0 (gleich), 1 (mehr).
     * @returns Die Entwicklung der Teilnehmerzahl.
     * @throws Fehler, falls die Entwicklung nicht bestimmt werden kann.
     */
    getEntwicklung(): number {
        if (this.vorletzteTeilnehmer === null) {
            throw new Error("Entwicklung der Teilnehmerzahl kann nicht bestimmt werden.");
        }
        if (this.letzteTeilnehmer! > this.vorletzteTeilnehmer) {
            return 1;
        } else if (this.letzteTeilnehmer! < this.vorletzteTeilnehmer) {
            return -1;
        } else {
            return 0;
        }
    }
}
