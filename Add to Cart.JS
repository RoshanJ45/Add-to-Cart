document.getElementById("addtocart").addEventListener('click', function() {
  const button = this;
  const cart = document.getElementById('cart');
  const cartTotal = parseInt(cart.getAttribute('data-totalitems')) + 1;
  button.classList.add('sendtocart');
  setTimeout(() => {
    button.classList.remove('sendtocart');
    cart.setAttribute('data-totalitems', cartTotal);
    cart.classList.add('shake');
    setTimeout(() => cart.classList.remove('shake'), 500);
  }, 1000);
});
