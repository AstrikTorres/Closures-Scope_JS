// Cuando combinamos scope con functions creamos el closure
const creaFunciones = () => {
    let nombre = 'Astrik';

    // 'muestraNombre' es una función interna (un closure)
    const muestraNombre = () => {
        console.log(nombre);
    }

    /* Soy la referencia de una función 'muestraNombre'
       y voy a recordar el estado de las variables
       al momento que me invoquen
    */
    return muestraNombre;
};

const miNuevaFuncion = creaFunciones();
miNuevaFuncion(); //Print: Astrik ¡Recordé el nombre!