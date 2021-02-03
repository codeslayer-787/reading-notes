'use strict';

function cart() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (var j = 0; j < quantityInputs.length; j++) {
    var input = quantityInputs[j];
    input.addEventListener('change', quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button');
  for (var k = 0; k < addToCartButtons.length; k++) {
    var addButton = addToCartButtons[k];
    addButton.addEventListener('click', addToCartClicked);
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

cart();

function purchaseClicked() {
  alert('send us a picture of your credit card (both sides) and your birth certificate and we\'ll get this going for you');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('menu-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('menu-item-price')[0].innerText;
  addItemToCart(title, price);
  updateCartTotal();
}

function addItemToCart(title, price) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert('This item is already added to the cart');
      return;
    }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}