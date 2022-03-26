const suma = require('../sum');

//Organizacion de las pruebas

describe('Operaciones de suma', () => {
    test('Suma 1+2=3', () => {
        expect(suma(1, 2)).toBe(3);
    })

    test('Suma 1+2!=4', () => {
        expect(suma(1, 2)).not.toBe(4);
    })
});

describe('Operaciones de asignacion', () => {
    test('Asignacion de objetos', () => {
        const data = { uno: 1 };
        data["dos"] = 2;
        expect(data).toEqual({ uno: 1, dos: 2 });
    })
});