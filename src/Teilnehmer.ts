/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt
 */
export class Teilnehmer {

    // Ergänzen Sie hier die Felddeklarationen
    private teilnehmerzahl: number = 0

    constructor() {
        // Initialisieren Sie hier die Felder
    }

    // Implementieren Sie die hier vorgegebenen Methoden:

    getLetzteTeilnehmer(): number {
        /** gibt letzte teilnehmer zurück (private feld) wenn nicht dann error werfen */ 
        if (this.teilnehmerzahl <= 0)
            throw new Error("A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.");
        else
            return this.teilnehmerzahl
    }

    registriereNeueTeilnehmer(teilnehmer: number): void {
        /**nimmt teilnehmer als parameter und fügt jedes mal ein zu */
        teilnehmer += 1
    }

    // Ergänzen Sie hier die fehlenden Methoden:
}
