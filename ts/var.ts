var r=20;

function getRandomNumber(flag){
    if(flag){
        var r=Math.random();
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

