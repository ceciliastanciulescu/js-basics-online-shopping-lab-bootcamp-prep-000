var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 };
 cart.push(obj);
 return item + " has been added to your cart."
}

function viewCart() {
  if(item.length === 0){
    return ("Your shopping cart is empty.");
  } else {
    var cartList;
    for(var i = 0; i < item.length; i++){
      cartList = "In your cart you have" + {getCart()[0].itemName} + " at " + {getCart()[0].itemPrice} + "."
    }
  }
  return cartList;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
