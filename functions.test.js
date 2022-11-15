const functions = require('./functions');

// npm test
// npm run testwatch

//-----
beforeAll( () => inicializarTestes() );
afterAll( () => finalizarTestes() );
const inicializarTestes = () => console.log('Inicializando testes...');
const finalizarTestes = () => console.log('Finalizando testes...');
//-----

test('Adicionando 1 + 1 deve resultar em 2', () => {
    expect( functions.somarDoisValores(1,1) )
    .toBe(2);
});

test('Deve ser null', () => {
    expect ( functions.sempreNulo() )
    .toBeNull();
});


test('Codigo 100 deve ser permitido', () => {
    expect( functions.codigoValido(100) )
    .toBeTruthy();
});

test('Deve inverter uma string', () => {
    expect( functions.inverterString('DANIEL') )
    .toEqual('LEINAD'); 
});


// Promise: dados assincronos (usando uma API de testes)
test('[Promise] Deve carregar o primeiro usuario de teste -> Leanne Graham', () => {
    expect.assertions(1); // por causa da chamada assincrona
    return functions.buscarUsuario1().then(dados => { 
        expect(dados.name).toEqual('Leanne Graham') 
    });
});

// Async Await: dados assincronos (usando uma API de testes)
test('[AsyncAwait] Deve carregar o primeiro usuario de teste -> Leanne Graham', async () => {
    expect.assertions(1); // por causa da chamada assincrona
    const dados = await functions.buscarUsuario1(); 
    expect(dados.name).toEqual('Leanne Graham');
});


// Inverter strings
// DANIEL -> LEINAD
// ANA -> ANA
// Jest -> tseJ
const casosInverterStrings = [['DANIEL', 'LEINAD'], ['ANA', 'ANA'], ['Jest', 'tseJ']];

describe('', () => {
    test.each(casosInverterStrings)(
        'inversao de %p -> %p',
        (original, inversaoEsperada) => {
            const resultado = functions.inverterString(original);
            expect(resultado).toEqual(inversaoEsperada);
        }
    )
});
