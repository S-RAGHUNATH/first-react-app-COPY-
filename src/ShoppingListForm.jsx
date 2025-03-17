import { useEffect, useState } from "react";
import { validate } from "uuid";

function ShoppingListForm({addItem}){
   const [formData, setFormData]= useState({product:'', qty:''});
   const [isProductValid, setIsProductValid] = useState(false);


   useEffect(function myEffect(){
    console.log('myEffect triggered')
}, [])
function validate(product){
if(product.length === 0){
    setIsProductValid(false);
}else{
    setIsProductValid(true);
}
}

const valueUpdate = (evt) => {
    if(evt.target.name === 'product'){
        validate(evt.target.value); //sending newest value to validate() which is coming from evt
    }
    setFormData(currVal => {
        let item = evt.target.name;
        let newValue = evt.target.value;
        currVal[item] = newValue
        return {...currVal}
        // return {
        //     ...currVal,
        //     currVal[evt.target.name]: evt.target.value
        // }
    })
 };

 function handleSubmit(evt){
    evt.preventDefault();  //will not allow <form> to refresh once submit clicked
    validate(evt.target.value);
    if(isProductValid){
        addItem(formData);
        setFormData({product:'', qty:0})
    }

 }
   return(
    <form>
        <h1>Product Name is {formData.product} and Quantity is {formData.qty}</h1>
        <label htmlFor="product">Product Name</label>
        <input type='text' placeholder="product name" name="product" id="product" value={formData.product}
        onChange={valueUpdate}/>

    {!isProductValid && <p style={{color:'red'}}>product name cannot be emoty</p>}
        <label htmlFor="qty">Quantity</label>
        <input type='number' placeholder="1" name="qty" id="qty" value={formData.qty}
        onChange={valueUpdate}/>

        <button onClick={handleSubmit} disabled={!isProductValid}>click</button>        
    </form>
   )
}
export default ShoppingListForm;