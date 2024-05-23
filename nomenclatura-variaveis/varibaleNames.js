// nomeclado de variáveis

// CODE EXAMPLE
const users = ['John', 'Doe', 'Jane'];

const filtered // utilize nomes descritivos ( usersStartingWithLetterJ )
= users.filter(user => { // evite diminutivos ( u => user )
    return user.startsWith('J');
});

// evite nomes genericos ( data, response, list, args, params )

// CODE EXAMPLE
function getUsers() {
    const data // utilize nomes mais semanticos e que façam coesão com o restante do código ( users )
    = getUsersFromDatabase();

    /**
     *  pense na possibilidade deste código com o tempo for recebendo mais funcionalidades
     *  como: VALIDAÇÃO, MANIPULAÇÃO DE DADOS (MAPPING) dentre outras coisas.
     */

    return data; // ( users )
}