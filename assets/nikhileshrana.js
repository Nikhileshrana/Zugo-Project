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














//Home Image change for Mobile View


document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.querySelector('#Banner-template--20699447230499__image_banner_N6h4iC > div > img');
  const originalImageSrc = imageElement.src;
  const alternativeImageSrc = 'https://zugo.co.in/cdn/shop/files/Siddhartha_collaboration_peach_crown_of_success.png?v=1718014733&width=3840';

  function updateImageSource() {
    if (window.innerWidth < 450) {
      imageElement.src = alternativeImageSrc;
    } else {
      imageElement.src = originalImageSrc;
    }
  }

  // Initial check
  updateImageSource();

  // Update on window resize
  window.addEventListener('resize', updateImageSource);
});




//Ends Here













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



