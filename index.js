// global scope
const condition = true;

function some() {
    // funcional scope => local scope
    const fuctional = 'In funcional scope';
    console.log(fuctional);
    console.log(condition);

    function other() {
        // funcional inner scope => local scope #2
        const inner = 'In inner functional scope';
        console.log(inner);
        console.log(fuctional);
        console.log(condition);
    }
    other();

    function sibling() {
        // funcional inner scope => local scope #3
        const next = 'In inner functional scope next';
        console.log(next);
        // inner będzi undf => Js będzie szukał w wyżym zakresie niż other
        // console.log(inner);
    }
    sibling();
}

some()
// funcional będzi undf
// console.log(funcional);

// block scope
{
    var foo = 'boo';
    // const me = 'bart';
    // let coo = 'doo';
}
console.log(foo);

// const i let są blokowe zatem się będzi udf
// console.log(me);
// console.log(coo);
