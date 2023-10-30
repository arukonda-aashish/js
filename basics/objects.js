//singleton object
const user=new Object();
//non singleton objectt
const user1={};
//merging of two objects
obj1={1:"a",2:"b"};
obj2={3:"c",4:"d"};
//const obj3=Object.assign({},obj1,obj2);
//console.log(obj3);
//another syntax;
const obj3={...obj1,...obj2}
console.log(obj3);
