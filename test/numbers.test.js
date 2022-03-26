const value = 2 + 2;

describe('Comparaciones de Numeros', () => {

    test('Value > 3', () => {
        expect(value).toBeGreaterThan(3);
    })

    test('Value >= 3', () => {
        expect(value).toBeGreaterThanOrEqual(3);
    })

    test('Value < 5', () => {
        expect(value).toBeLessThan(5);
    })

    test('Value <= 5', () => {
        expect(value).toBeLessThanOrEqual(5);
    })
})