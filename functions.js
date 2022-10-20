const axios = require("axios");

const functions = {
    somarDoisValores: (v1, v2) => v1 + v2,

    sempreNulo: () => null,

    codigoValido: function (codigo) {
        return (codigo >= 100 && codigo <= 999);
    },

    funcaoNaoTestada: (v) => v + 1,

    buscarUsuario1: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'houve algum erro'),

    inverterString: str => str.split('').reverse().join('')
}

module.exports = functions;
