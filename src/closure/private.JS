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