var r = 20;
function getRandomNumber(flag) {
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
getRandomNumber(false);
