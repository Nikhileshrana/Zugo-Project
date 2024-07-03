console.log("Developed By Nikhilesh Rana for more info click on -  https://www.nikhileshrana.tech  ");



//Instagram Tab

let instagram_new_win = document.getElementById('HeaderMenu-instagram');
instagram_new_win.setAttribute('target', '_blank');
//ends here








// Program for zoom in preview of the product image 


const productMediaElementss = document.querySelectorAll('.product__media');

function handleMouseMove(e) {
  const boundingRect = this.getBoundingClientRect();
  const x = e.clientX - boundingRect.left;
  const y = e.clientY - boundingRect.top;
  const offsetX = x / boundingRect.width * 100;
  const offsetY = y / boundingRect.height * 100;

  this.querySelector('img').style.transformOrigin = `${offsetX}% ${offsetY}%`;
}

if (window.innerWidth > 600) {
  productMediaElementss.forEach(productMedia => {
    productMedia.addEventListener('mousemove', handleMouseMove);
  });
}


//ends here







//Home Image change for Mobile View





document.addEventListener('DOMContentLoaded', function() {
  const mynewimageElement = document.querySelector('#Banner-template--20699447230499__image_banner_N6h4iC > div.banner__media > img');
  
  // Check if the element is correctly selected
  if (!mynewimageElement) {
    console.error('Image element not found!');
    return;
  }

  const originalImageSrc = mynewimageElement.src;
  const alternativeImageSrc = 'data:image/jpeg;base64,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';


  function updateImageSource() {
    console.log("IMage Update Function running")
    if (window.innerWidth < 450) {
      mynewimageElement.src = alternativeImageSrc;
    } else {
      mynewimageElement.src = originalImageSrc;
    }
  }

  // Initial check
  updateImageSource();

  // Update on window resize
  window.addEventListener('resize', updateImageSource);
});







//Ends Here



























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










//go back 
function goBack_zugo(){window.history.back();}
//ends here




























//Product Image Click and opens in new tab


document.querySelector('.product__media').addEventListener('click', function() {
    // Get the image source
    var imgElement = document.querySelector('.product__media > img');
    if (imgElement) {
        var imgSrc = imgElement.src;

        // Create a new window
        var popup = window.open('', '_blank', 'width=800,height=600');

        // Write the HTML for the popup window
        popup.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Product Image</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #f0f0f0;
                    }
                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                    button {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: transparent;
                        border: none;
                        cursor: pointer;
                    }
                </style>
            </head>
            <body>
                <button onclick="window.close()">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10vw" height="5vh" viewBox="0 0 30 30">
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                    </svg>
                </button>
                <img src="${imgSrc}" alt="Product Image">
            </body>
            </html>
        `);

        // Ensure the popup window is focused
        popup.focus();
    } else {
        console.error('Image element not found');
    }
});



//ends here



