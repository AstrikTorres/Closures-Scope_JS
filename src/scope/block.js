const fruits = () => {
    if(true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
/*  console.log(fruit2);
    console.log(fruit3); */
}

fruits();

// Esta función imprime unicamente el valor 10 por var
const anotherFunctionVar = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

const anotherFunctionLet = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunctionVar();
anotherFunctionLet(); 