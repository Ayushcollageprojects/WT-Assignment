 const openbuttons = document.querySelectorAll('.openbutton');
 const fullbox = document.getElementById('fullbox');
 const closebutton = document.getElementById('closebutton');
 
 openbuttons.forEach(button => {
  button.addEventListener('click', (btn) => {

     var targetbutton = btn.target;
     var parentNode = button.closest('.box1');  // Find the parent product div
     var productImage = parentNode.querySelector('.box-image').src;
     var productVendor = parentNode.querySelector('.grey').innerText;
      var productTitle = parentNode.querySelector('.cap-line').innerText;
      var productPrice = parentNode.querySelector('.cost').innerText;
      var productPriceCompare = parentNode.querySelector('.price').innerText;

     console.log(parentNode);
     console.log(productImage);
     console.log(productVendor);
     console.log(productTitle);
     console.log(productPrice);
     console.log(productPriceCompare);

      document.querySelector('.bigimage').src = productImage;
      document.querySelector('.picture1').src = productImage;
      document.querySelector('.picture2').src = productImage;
      document.querySelector('.picture3').src = productImage;
      document.querySelector('.heading').innerText = productVendor;
      document.querySelector('.about').innerText = productTitle;
      document.getElementById('mrpcencle').innerText = productPriceCompare;
      document.getElementById('mrp').innerText = productPrice;
       
     fullbox.style.display = 'block';   
  });
});

fullbox.addEventListener('click', (event) => {
 
  if (event.target === fullbox) {
    fullbox.style.display = 'none';
  }
});

 closebutton.addEventListener('click', () => {
  fullbox.style.display = 'none';
 });
 
  //swap image
  
  function swapimage(smallImage) {
  var bigImage = document.getElementById("bigimage");
  var tempSrc = bigImage.src;
  bigImage.src = smallImage.src;
  smallImage.src = tempSrc;
  }

 