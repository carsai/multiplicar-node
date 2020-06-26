const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un fichero con la tabla de multiplicar', opt)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}