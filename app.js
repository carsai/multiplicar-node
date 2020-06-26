const argv = require('./config/yargs').argv;
require('colors');

const { crearMutiplicacion, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearMutiplicacion(argv.base, argv.limite)
            .then(resultado => console.log('Archivo creado '.green + resultado.blue))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no disponible');
        break;
}