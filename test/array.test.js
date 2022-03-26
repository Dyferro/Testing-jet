const lacteos = [
    'leche',
    'queso',
    'mantequilla',
    'cuajada'
];

describe('Comprobando elementos de un arreglo', () => {
    test('Un queso es un lacteo', () => {
        expect(lacteos).toContain('queso');
    });

    test('El jamon es un lacteo', () => {
        expect(lacteos).toContain('jamon');
    });
})