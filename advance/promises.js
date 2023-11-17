const promise1=new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("async task is completed");
    },1000);
});
promise1.then(function(){
    console.log("promise consumed");
})