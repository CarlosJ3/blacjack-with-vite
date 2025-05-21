import _ from 'underscore';

// export const Minombre = 'Carlos';
/**
 * esta funcion crea un nuevo deck de cartas
 * @param {Array<String} tipoSDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String} TipoSEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

 export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length ===0)
         throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if (!TiposEspeciales || TiposEspeciales.length ===0)
        throw new Error('TipoSEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];

    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }


    x
    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;