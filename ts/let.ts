let r=20;
let z=300;
z=30;

{
    let z=30;
}



function getRandomNumber(flag){
    if(flag) {
        let r=Math.random();
    }
    console.log(r);
}

/* runtime 

function getRandomNumber(flag){
    var r;
    if(flag){
        r=Math.random();
    }
    return r;
}
*/

// 1. function scope
// 2. block scope { }

getRandomNumber(false);

