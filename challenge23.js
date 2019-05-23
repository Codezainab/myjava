//Create a Sub- Sandwich with 5 toppings//
let orderCount= 0;

const takeOrder = (topping, topping1, topping2, topping3, topping4) => {
    orderCount++;
    console.log (`Order no. ${orderCount}: sandwich with ${topping}, ${topping1}, ${topping2}, ${topping3}, ${topping4}`);

}

takeOrder("tofu","avocado","lettuce","tomato","cucumber");

//challenge2//
let values = [1,2,3];
values.unshift (4)

//Generate Random number//

for (i = 0; i < 6; i++ ){
    console.log(Math.random () * 49 + 1);

}