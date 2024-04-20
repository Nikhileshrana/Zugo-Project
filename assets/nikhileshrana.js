console.log("Developed By Nikhilesh Rana for more info click on -  https://www.nikhileshrana.tech  ");

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

// Path: assets/nikhileshrana.js

// Get the product media item



document.querySelector('.product__media-item').addEventListener('click', function() {
    // Get the image source
    var imgSrc = document.querySelector('.product__media > img').src;

    // Create a new window
    var popup = window.open('', '_blank', 'width=2000,height=900');

    // Write the HTML for the popup window
    popup.document.write(`
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
                }
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
                button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }
            </style>
        </head>
        <body>
            <button onclick="window.close()" style="background:transparent; border:0px;">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10vw" height="5vh" viewBox="0 0 30 30">
    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
</svg>
            </button>
            <img src="${imgSrc}" alt="Product Image">
        </body>
        </html>
    `);
});


document.getElementById("HeaderMenu-instagram").addEventListener("click", ()=>{
    window.open("https://www.instagram.com/zugo.co.in/","_blank");
});