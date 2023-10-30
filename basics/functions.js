function shoppingCart(...num)//here ... is used as rest operator;
{
    return num;
}
console.log(shoppingCart(1,2,3));
const user={
    name: "abc",
    price:199

}
function handle(anyobject)
{
    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`);
}
handle(user);