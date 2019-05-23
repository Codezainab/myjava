let orderCount= 0;

const takeOrder = (topping, drink) => {
    orderCount++;
    console.log(`Order no. ${orderCount}: Pizza with ${topping} and ${drink}`);
}

takeOrder("pinapple","pepsi");
takeOrder("ham","coke");