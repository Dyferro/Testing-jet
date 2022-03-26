const n = null;

describe('Comparadores de veracidad',
    () => {
        test('null', () => {
            //Matcher para comparar valores nulos
            expect(n).toBeNull();
        })

        test('Undefined', () => {
            //Comparar coincidencias con valores undefined
            exect(n).toBeUndefined();
        })

        test('Defined', () => {
            //Coincidencias con valores contrarios a undefined
            expect(n).toBeDefined();
        })

        test('Truthy', () => {
            //Coincidencias con valores que en un if se consideren verdaderos
            expect(n).toBeTruthy();
        })

        test('Falsy', () => {
            //Coincidencias con valores que en un if se consideren falsos
            expect(n).toBeFalsy();
        })
    })