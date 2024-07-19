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
function fetchmemes() {
    fetch(`https://api.imgflip.com/get_memes`)
  //   console.log(fetch(`https://api.imgflip.com/get_memes`))
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchmemes(data);
      })
      .catch(error => console.error('Error fetching students:', error));
  }







