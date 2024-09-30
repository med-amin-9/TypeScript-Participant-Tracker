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

})
*/