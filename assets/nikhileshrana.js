console.log("Developed By Nikhilesh Rana for more info click on -  https://www.nikhileshrana.tech  ");




//Program for showing the add Engraving options after pressing YES


  document.addEventListener('DOMContentLoaded', function() {
    const fieldsets = document.querySelectorAll('fieldset.js.product-form__input.product-form__input--pill');

    fieldsets.forEach(fieldset => {
      const noEngraving = fieldset.querySelector('input[type="radio"][value="NO"]');
      const yesEngraving = fieldset.querySelector('input[type="radio"][value="YES"]');
      const engravingmyDiv = document.getElementById('product-zugo-engrave-option');
      // Proceed only if both radio buttons are found
    
      engravingmyDiv.style.display = 'none';
      
      if (noEngraving && yesEngraving) {
        noEngraving.addEventListener('change', function() {
          if (this.checked) {
            engravingmyDiv.style.display = 'none';
          }
        });

        yesEngraving.addEventListener('change', function() {
          if (this.checked) {
            engravingmyDiv.style.display = 'block';
          }
        });
      }
    });
  });

//Ends here 



//program for product s1 and s2

document.addEventListener("DOMContentLoaded", function() {
    const productTitlenikhileshrana = document.querySelector('.product__title h1').textContent;
    const targetElementnikhileshrana = document.getElementById('nikhileshranatestingspotoneandtwo');
    

    if (productTitlenikhileshrana === 'Forever Spot S1' || productTitlenikhileshrana === 'Forever Spot S2') {
        targetElementnikhileshrana.style.display = 'block';
    } else {
        targetElementnikhileshrana.style.display = 'none';
    }
});



const textarea = targetElementnikhileshrana.querySelector('textarea');
    if (textarea && textarea.value.trim() === '') {
        window.alert('Coordinates are not entered');
    }

//ends here 













