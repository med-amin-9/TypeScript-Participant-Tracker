/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt
 */
export class Teilnehmer {

    // Ergänzen Sie hier die Felddeklarationen
    private letzteTeilnehmer: number | null = null;

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
        this.letzteTeilnehmer = teilnehmer;
    }

    // Ergänzen Sie hier die fehlenden Methoden:


}
