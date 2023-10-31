const user={
    name: "aashish",
    price: 999,
    welcome:function()
    {
        console.log(`${this.name}, welcome to the website`);
    }
}
console.log(this);//gives empty object but if the same is run on the browser it will give window
//arrow function
const one  =  ()  => {
    let user="aashish"
    console.log(user);
}
one();
//implicit return
const add=(num1,num2)=> num1+num2;
console.log(add(5,10));
//immediately invoked function expression(IIFE)
(function a(){
    console.log("hello");
})();
(()=>{
    console.log("db connected");
})();