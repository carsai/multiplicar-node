const fs = require('fs');
require('colors');

let listarTabla = (base, limite = 10) => {

    if (limite < 0) {
        throw new Error('El limite debe ser mayor de 0');
    }

    for (let index = 0; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}`.red)
    }
}

let crearMutiplicacion = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('--base debe ser un numero');
            return;
        }

        let data = '';
        let nombreFichero = `tablas/tabla-${base}-limite-${limite}.txt`;

        for (let index = 0; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;
        }

        fs.writeFile(nombreFichero, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreFichero);

        });
    });
}

module.exports = {
    crearMutiplicacion,
    listarTabla
}