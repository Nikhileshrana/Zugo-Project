customElements.get("product-model")||customElements.define("product-model",class extends DeferredMedia{constructor(){super()}loadContent(){super.loadContent(),Shopify.loadFeatures([{name:"model-viewer-ui",version:"1.0",onLoad:this.setupModelViewerUI.bind(this)}])}setupModelViewerUI(e){e||(this.modelViewerUI=new Shopify.ModelViewerUI(this.querySelector("model-viewer")))}}),window.ProductModel={loadShopifyXR(){Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:this.setupShopifyXR.bind(this)}])},setupShopifyXR(e){e||(window.ShopifyXR?(document.querySelectorAll('[id^="ProductJSON-"]').forEach((e=>{window.ShopifyXR.addModels(JSON.parse(e.textContent)),e.remove()})),window.ShopifyXR.setupXRElements()):document.addEventListener("shopify_xr_initialized",(()=>this.setupShopifyXR())))}},window.addEventListener("DOMContentLoaded",(()=>{window.ProductModel&&window.ProductModel.loadShopifyXR()}));
