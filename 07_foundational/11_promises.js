const uno = () => {
    return "I am One";
}

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Wohoo");
        }, 1000);
    });
}

const tres = () => {
    return "I am Three";
}

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);
    let valTwo = await dos();
    console.log(valTwo);
    let valThree = tres();
    console.log(valThree);
}

callMe();