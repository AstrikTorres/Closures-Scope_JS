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
