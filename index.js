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
    var itemList;
    for(var i = 0; i < item.length; i++){
      return "In your cart you have" + (i+1) + " at " + 
    }
  }
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
