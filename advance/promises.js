const promise1=new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    },1000);
});
promise1.then(function(){
    console.log("promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("promise consumed 2");

})
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:"aashish",email:"chai@example"});
    },1000);
})
promise3.then(function(user){ 
    console.log(user);
});
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(error)
        {
            resolve({username:"aashish",password:"1234"});
        }
        else
        {
              reject('Something went wrong');
        }
    },1000);
})
promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
      console.log(username);
}).catch(function(error){
     console.log(error);
}).finally(()=>console.log("the promise is resolved or rejected"))
const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(error)
        {
            resolve({username:"javascript",password:"123"});
        }
        else{
            reject('error js went wrong');
        }
    },1000)
});
 
async function consumepromise(){
    try{
    const response =await promise5
    console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
consumepromise();
async function getAllUsers(){
       const response=await fetch('https://jsonplaceholder.typicode.com/users');
       const data =await response.json();
       console.log(data);
}
getAllUsers();