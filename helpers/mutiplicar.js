const fs = require('fs'); //requiremos el fs para poder crear el txt
const colors = require('colors');



const crearArchivo = async(base, listar = false) => {


    try {
        let salida = '';

        //Hacemos el bucle para crear la tabla
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if (listar) {
            console.log("==============================".green);
            console.log(`       TABLA DEL ${ base }       `);
            console.log("==============================".green);

            console.log(salida);

        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        //validamos si existe el error 

        return `tabla-${ base }.txt `;

    } catch (error) {
        throw error;
    }

}




module.exports = {
    crearArchivo
}