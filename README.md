# Closures y Scope en Js
 En este repositorio encontraras codigo que te ayudara a entender los closures, el scope y hoisting de JavaScript 
## Scope
 Es el alcance que va a tener una variable dentro del código.
En otras palabras, el Scope se encargara de decidir 
a que bloques de codigo va a acceder una variable.

### Global Scope

No están dentro de funcioones o bloques, por lo tanto se puede acceder a ellas de manera global.

<li>Con var podemos re-asignar una variable →  mala práctica.</li>
<li>Con let y const no podemos re-asignar</li>
<li>Se pueden crear variables sin las palabras reservadas →  mala práctica.</li>
<li>Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global</li>

### Local Scope

Básicamente se refiere a que no se puede acceder a variables declaradas dentro de funciones por fuera de estás.

### Lexical Scope o Ámbito Léxico 

JavaScript busca las variables desde el bloque interno hacia los bloques de fuera de donde haya sido llamada, por ejemplo:

~~~
const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      const scope = "I'm local 3";
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();
~~~

Su salida será: 
~~~
"I'm local 3"
~~~

Debido a que el console.log(scope) busca la variable dentro de func3() (desde donde fué llamado) y 
al encontrar la variable scope = “I’m local 3” entonces la imprime. Pero si eliminamos esa linea y dejamos esto:

~~~
const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();
~~~

Nos imprimirá:

~~~
"I'm local 2"
~~~

Este comportamiento es exclusivamente de "dentro hacia fuera", por tanto si intentamos ejecutar el siguiente código:

~~~
const func1 = () => {
  const func2 = () => {
    const func3 = () => {
      const scope = "I'm local 3";
    }
    console.log(scope);
    func3();
  }
  func2();
}
func1();
~~~

JS devuelve un ReferenceError ya que console.log(scope) fue llamado desde func2(); por fuera de func3() 
en donde se encuentra definido const scope = “I’m local 3”. Por lo que JS no puede encontrarlo y devuelve el error.

## Closure
Un closure es una función interna que tiene acceso a el alcance de su función externa incluso después de que la función externa ejecute return
### Explicación con código
~~~
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
}

const miNuevaFuncion = creaFunciones();
miNuevaFuncion(); //Print: Astrik ¡Recordé el nombre!
~~~
miNuevaFuncion se ha convertido en un closure. Un closure es un tipo especial de objeto que combina dos cosas, **una función, y el ámbito léxico en que se creó esa función**

Significa que un closure puede recordar y acceder a variables y argumentos de su función externa, incluso después de que la función externa haya finalizado.

Otro ejemplo es:
~~~
const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(++count);
    }
    return displayCount;
};

const myCount = buildCount(0);
myCount(); // 1
myCount(); // 2
myCount(); // 3
~~~
### Variables privadas usan closures
Con el uso de closures, podemos tener algo parecido a variables privadas. Es decir, encapsulan variables que no pueden ser modificadas directamente por otros objetos, solo por las funciones pertenecientes al mismo.
~~~
const person = () => {
    let saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

const newPerson = person();
console.log(newPerson.getName()); // Print: Name
newPerson.setName('Astrik'); // Modificamos la variable atraves del método setName
console.log(newPerson.getName()); // Print: Astrik
~~~
## Referencias:
https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
https://platzi.com/clases/scope/
