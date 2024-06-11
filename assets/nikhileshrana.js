console.log("Developed By Nikhilesh Rana for more info click on -  https://www.nikhileshrana.tech  ");

const checkbox = document.getElementById('additional-feature-checkbox');
  if (checkbox) {  // Check if the checkbox exists before adding event listener
    checkbox.addEventListener('change', function() {
      const variantId = this.dataset.variantId;
      const priceElement = document.querySelector(`[data-variant-id="${variantId}"] .price`);  // Target specific price element
      if (priceElement) {
        const currentPrice = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ''));  // Extract price as a number
        const newPrice = this.checked ? currentPrice + 200 : currentPrice - 200;
        priceElement.textContent = `₹${newPrice.toFixed(2)}`;  // Update price with two decimal places
      }
    });
  }


const productMediaElementss=document.querySelectorAll(".product__media");function handleMouseMove(n){const t=this.getBoundingClientRect(),e=n.clientX-t.left,i=n.clientY-t.top,o=e/t.width*100,d=i/t.height*100;this.querySelector("img").style.transformOrigin=`${o}% ${d}%`}window.innerWidth>600&&productMediaElementss.forEach((n=>{n.addEventListener("mousemove",handleMouseMove)}));let instagram_new_win=document.getElementById("HeaderMenu-instagram");function goBack_zugo(){window.history.back()}instagram_new_win.setAttribute("target","_blank"),document.querySelector(".product__media-item").addEventListener("click",(function(){var n=document.querySelector(".product__media > img").src;window.open("","_blank","width=2000,height=900").document.write(`\n        <html>\n        <head>\n            <title>Product Image</title>\n            <style>\n                body {\n                    margin: 0;\n                    padding: 0;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    height: 100vh;\n                }\n                img {\n                    max-width: 100%;\n                    max-height: 100%;\n                }\n                button {\n                    position: absolute;\n                    top: 10px;\n                    right: 10px;\n                }\n            </style>\n        </head>\n        <body>\n            <button onclick="window.close()" style="background:transparent; border:0px;">\n            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10vw" height="5vh" viewBox="0 0 30 30">\n    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>\n</svg>\n            </button>\n            <img src="${n}" alt="Product Image">\n        </body>\n        </html>\n    `)}));



