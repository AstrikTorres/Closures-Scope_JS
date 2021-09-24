/* Lexical Scope / Ámbito léxico:
   Se refiere a que un bloque de código solo puede acceder a variables
   fuera de ella. Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.
*/

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
// Salida: "I'm local 3"

/* Debido a que el console.log(scope):23 busca la variable dentro
   de func3():21 (donde fué llamado) y ahí mismo encontrar la variable
   scope = "I'm local 3":20, entonces la imprime. Pero si eliminamos esa linea y dejamos esto:
*/

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
// Salida: "I'm local 2"

/* Dentro de func3():42 ya no existe ninguna definición de la variable scope, por lo que JS buscará por fuera de este bloque, pasando al bloque func2():40, en donde encontrará const scope = "I'm local 2":41.
 */