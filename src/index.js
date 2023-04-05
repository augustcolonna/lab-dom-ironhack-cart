// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  let subTotal = price.innerText * quantity.value;
  
  const subTotalTd = product.querySelector('.subtotal span')
  subTotalTd.textContent = subTotal

  return subTotal

}
  

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProduct = document.getElementsByClassName('product');
  
  let cartTotal = 0;

  for(let i = 0; i < multipleProduct.length; i++){
    let cartSubTotal = updateSubtotal(multipleProduct[i]);
    cartTotal += cartSubTotal;
  }    

  // ITERATION 3
  finalTotal = "Total: $" + cartTotal

  const totalProduct = document.getElementById('total-value')
  totalProduct.innerText = finalTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
