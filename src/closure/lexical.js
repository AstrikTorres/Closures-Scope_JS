const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(++count);
    }
    return displayCount;
};

const myCount = buildCount(0);
myCount(); // 0 + 1 = 1
myCount(); // 1 + 1 = 2
myCount(); // 2 + 1 = 3