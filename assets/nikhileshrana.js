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
            <button onclick="window.close()">Close</button>
            <img src="${imgSrc}" alt="Product Image">
        </body>
        </html>
    `);
});