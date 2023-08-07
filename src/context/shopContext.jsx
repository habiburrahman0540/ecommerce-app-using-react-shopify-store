
import React, { Component, createContext } from 'react'
import Client from 'shopify-buy';
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_APP_URL,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_APP_STORETOKEN
  });

  const shopContext = createContext();
class shopProvider extends Component  {
state = {
    product:{},
    products:[],
    checkout:{},
    isCartOpen:false,
    isMenuOpen:false
}
componentDidMount(){
    if(localStorage.checkout_id){
this.fetchCheckout(localStorage.checkout_id)
    }else{
this.createCheckout();
    }
}
createCheckout = async() =>{
 const checkout = await client.checkout.create();
        localStorage.setItem('checkout_id',checkout.id);
        this.setState({checkout})
     
}
fetchCheckout = async(checkoutId) =>{
 const checkout = await client.checkout.fetch(checkoutId);
    this.setState({checkout})

}
addItemToCheckout = async(variantId,quantity) =>{
  const lineItemsToAdd=[
    {
      variantId,
      quantity:parseInt(quantity,10),
    }
  ];
  const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
  this.setState({checkout:checkout});
  this.openCart();

}
updateLineItem = async ({ variantId, quantity }) => {

  // check to see if this variantId exists in storedCheckout
  const lineItemVariant = this.state.checkout.lineItems?.find(
    lineItem => lineItem.variant.id === variantId
  );

  if (lineItemVariant) {
    const newQuantity = lineItemVariant.quantity + quantity;

   
      const checkout = await client.checkout.updateLineItems(this.state.checkout.id, [
        {
          id: lineItemVariant.id,
          quantity: newQuantity,
        },
      ]);
      this.setState({checkout:checkout});
    
  }
}
removeLineItem = async(lineItemIdsToRemove) =>{
  const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove);
  this.setState({checkout:checkout});
}
fetchAllProduct = async() =>{
  // Fetch all products in your shop
 const products= await client.product.fetchAll();
    this.setState({products});
  
}
fetchProductWithHandle=async(handle)=>{
      // Fetch all products in your shop
 const product= await client.product.fetchByHandle(handle);
    this.setState({product})
  
}
openCart =()=>{
  this.setState({isCartOpen:true})
}
closeCart=()=>{this.setState({isCartOpen:false})}
closeMenu=()=>{ this.setState({isMenuOpen:false})}
openMenu=()=>{ this.setState({isMenuOpen:true})}
render(){
  return (
    <shopContext.Provider value={{
        ...this.state,
        fetchProductWithHandle:this.fetchProductWithHandle,
        fetchAllProduct:this.fetchAllProduct,
        addItemToCheckout:this.addItemToCheckout,
        updateLineItem:this.updateLineItem,
        removeLineItem:this.removeLineItem,
        openCart:this.openCart,
        closeCart:this.closeCart,
        openMenu:this.openMenu,
        closeMenu:this.closeMenu
        }}>
        {this.props.children}
    </shopContext.Provider>
  )
}
}
const shopConsumer = shopContext.Consumer
export {shopConsumer,shopContext}

export default shopProvider