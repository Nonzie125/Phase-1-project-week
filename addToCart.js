// Function to add item to the cart
function addToCart(itemId) {
    // find iditem
    let item = document.getElementById(itemId);

    // Get item title
    let itemTitle = item.querySelector('.title').innerText;

    // new div element
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.id = 'cart-item-' + itemId; 
    cartItem.innerText = itemTitle;

    // i will create a removve button 
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        removeFromCart(cartItem.id);
    };
    cartItem.appendChild(removeButton);

    // Append the cart item to the cart
    let cart = document.getElementById('cart-items');
    cart.appendChild(cartItem);
}

// function to remove from cart
function removeFromCart(cartItemId) {
    let cartItem = document.getElementById(cartItemId);
    cartItem.remove();
}

//We try fetching memes
document.addEventListener("DOMContentLoaded",() => {
function fetchmemes() {}
    fetch(`https://api.imgflip.com/get_memes`)
     console.log(fetch(`https://api.imgflip.com/get_memes`))
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchmemes(data);
      })
    })
      .catch(error => console.error('Error fetching memes:', error));
//create an array of fetched memes images
      let memes =["https:\/\/i.imgflip.com\/30b1gx.jpg","https:\/\/i.imgflip.com\/1g8my4.jpg","https:\/\/i.imgflip.com\/1ur9b0.jpg"]
 function memesFun (){
    document.getElementById('memesFun'). src=memesFun[1];
    img.src = "https:\/\/i.imgflip.com\/1g8my4.jpg"
    style="width:100px;height:120px"
 }
 memesFun("https://api.imgflip.com/get_memes");

 let toPay = document.createElement('div');
 toPay.classList.add('amount');
 toPay.id = 'amount-' + amount; 
 toPay.innerText = itemTitle;
 
