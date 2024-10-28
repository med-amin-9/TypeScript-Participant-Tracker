/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt
 */
export class Teilnehmer {

    // Ergänzen Sie hier die Felddeklarationen
    Teilnehmerzahl: number = 0

    constructor() {
        // Initialisieren Sie hier die Felder
    }

    // Implementieren Sie die hier vorgegebenen Methoden:

    getLetzteTeilnehmer(): number { 
        if (!this.Teilnehmerzahl)
        throw new Error("A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.");
    }

    registriereNeueTeilnehmer(teilnehmer: number): void {
        throw new Error("Not implemented yet");
    }

    // Ergänzen Sie hier die fehlenden Methoden:
}
