function receivesAFunction(callback){
    return callback();
}


function returnsANamedFunction(){
    return function returningNamedFunctions(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}