   const coding =["js","ruby","cpp"];
coding.forEach( function(item){
   // console.log(item);
});
//map
const map =new Map();
map.set("a",1);
map.set("b",2);
// console.log(map);
// console.log(map.size);
//filter is used to return some values while using an array based on a certain condition
const arr=[1,2,3,4,5,6,7,8,9,10];
const hold=arr.filter((val)=>{
    return val>4;
})
//console.log(hold);
//....using map
const h=arr.map((val)=>{
    return val+10;
})
//console.log(h);
// chaining
const newar=arr.map((num)=>num*10).map((num)=>num+1);
//console.log(newar);
//... reduce
const a=[1,2,3];
const sum=a.reduce( function(acc,cur){
    return acc+cur;
},0);
//console.log(sum);
//...shopping cart example
const shopping=[
    {
        name:"js",
        price:499
    },
    {
        name:"py",
        price:499
    },
    {
        name:"cpp",
        price:499
    }
]
const tot=shopping.reduce( (acc,item)=>(acc+item.price),0);
console.log(tot)

