import { Teilnehmer } from "../src/Teilnehmer"

test("Konstruktor", () => {
    const testee = new Teilnehmer();
    expect(testee).toBeDefined();
})

test("getLetzteTeilnehmer direkt nach Konstruktion", () => {
    const testee = new Teilnehmer();
    expect(() => testee.getLetzteTeilnehmer()).toThrow();
})

test("registriereNeueTeilnehmer, erfolgreich", () => {
    const testee = new Teilnehmer();
    testee.registriereNeueTeilnehmer(1); // soll so funktionieren
})

test("registriereNeueTeilnehmer, Teilnehmerzahl darf nicht kleiner 0 sein", () => {
    const testee = new Teilnehmer();
    expect(() => testee.registriereNeueTeilnehmer(-1)).toThrow();
})

test("registriereNeueTeilnehmer, Teilnehmerzahl darf nicht größer als 9999 sein", () => {
    const testee = new Teilnehmer();
    expect(() => testee.registriereNeueTeilnehmer(10000)).toThrow();
})

test("registriereNeueTeilnehmer und getLetzteTeilnehmer sind konsistent", () => {
    const testee = new Teilnehmer();
    testee.registriereNeueTeilnehmer(1); // soll so funktionieren
    expect(testee.getLetzteTeilnehmer()).toBe(1);
    testee.registriereNeueTeilnehmer(2); // soll so funktionieren
    expect(testee.getLetzteTeilnehmer()).toBe(2);
})

/* 
Template für eigene Tests

test("name", ()=>{

})*/
test("getEntwicklung funktioniert korrekt", () => {
    const testee = new Teilnehmer();
    testee.registriereNeueTeilnehmer(5);
    expect(() => testee.getEntwicklung()).toThrow("Entwicklung der Teilnehmerzahl kann nicht bestimmt werden.");
    testee.registriereNeueTeilnehmer(10);
    expect(testee.getEntwicklung()).toBe(1); // Entwicklung nach oben
    testee.registriereNeueTeilnehmer(10);
    expect(testee.getEntwicklung()).toBe(0); // Keine Veränderung
    testee.registriereNeueTeilnehmer(5);
    expect(testee.getEntwicklung()).toBe(-1); // Entwicklung nach unten
});


test("getMin wirft Fehler, wenn noch keine Teilnehmer registriert sind", () => {
    const testee = new Teilnehmer();
    expect(() => testee.getMin()).toThrow("Es wurde noch keine Teilnehmerzahl registriert.");
});

test("getMin gibt die geringste registrierte Teilnehmerzahl zurück", () => {
    const testee = new Teilnehmer();
    testee.registriereNeueTeilnehmer(10);
    testee.registriereNeueTeilnehmer(5);
    testee.registriereNeueTeilnehmer(15);
    expect(testee.getMin()).toBe(5);
});

test("getMax wirft Fehler, wenn noch keine Teilnehmer registriert sind", () => {
    const testee = new Teilnehmer();
    expect(() => testee.getMax()).toThrow("Es wurde noch keine Teilnehmerzahl registriert.");
});

test("getMax gibt die höchste registrierte Teilnehmerzahl zurück", () => {
    const testee = new Teilnehmer();
    testee.registriereNeueTeilnehmer(10);
    testee.registriereNeueTeilnehmer(5);
    testee.registriereNeueTeilnehmer(15);
    expect(testee.getMax()).toBe(15);
});

//frage ist die dependencie von andere funktion beim testen einer funktion normal ????? oder vlt mock ups in zukunft? 
test("getAnzahl gibt die Anzahl der Registrierungen zurück", () => {
    const testee = new Teilnehmer();
    expect(testee.getAnzahl()).toBe(0); // Anfangswert sollte 0 sein
    testee.registriereNeueTeilnehmer(10);
    expect(testee.getAnzahl()).toBe(1); // Nach einer Registrierung sollte die Anzahl 1 sein
    testee.registriereNeueTeilnehmer(5);
    expect(testee.getAnzahl()).toBe(2); // Nach zwei Registrierungen sollte die Anzahl 2 sein
    testee.registriereNeueTeilnehmer(15);
    expect(testee.getAnzahl()).toBe(3); // Nach drei Registrierungen sollte die Anzahl 3 sein
}); 

test("getDurchschnitt wirft Fehler, wenn noch keine Teilnehmer registriert sind", () => {
    const testee = new Teilnehmer();
    expect(() => testee.getDurchschnitt()).toThrow("Es wurde noch keine Teilnehmerzahl registriert.");
});

test("getDurchschnitt berechnet den Durchschnitt der registrierten Teilnehmerzahlen", () => {
    const testee = new Teilnehmer();
    testee.registriereNeueTeilnehmer(5);
    testee.registriereNeueTeilnehmer(10);
    expect(testee.getDurchschnitt()).toBeCloseTo(7.5, 1); // Durchschnitt ist 7.5
    testee.registriereNeueTeilnehmer(15);
    expect(testee.getDurchschnitt()).toBeCloseTo(10, 1); // Durchschnitt ist 10
});