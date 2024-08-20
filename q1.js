function outerFunction(param) {
    const outerVariable = 'I am from outerFunction';

    return function innerFunction() {
        console.log(`Parameter: ${param}`);
        console.log(`Outer Variable: ${outerVariable}`);
    };
}

const myInnerFunction = outerFunction('Hello');
myInnerFunction();
