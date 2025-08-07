// ✅ 3. Quantity Selector
//     Create “+” and “–” buttons to increase or decrease item quantity (min 1).
//     Display total price = quantity * pricePerItem.

import React , {useState} from 'react'


function QuantitySelector(){
    const [items, setItems] = useState(0)
    const [price, setPrice] = useState(100)
    

    const addItems = ()=>{
        setItems(i => i + 1)
    }

    const itemsRemoved = ()=>{
        setItems(i => i - 1)
    }

    const totalPrice = ()=>{
        setPrice(`${price * items}`)
    }




    return(
    <div>
        <p>Items Available: {items}</p>
        <button onClick={addItems}>Items Added</button>

        <p>Items Available: {items}</p>
        <button onClick={itemsRemoved}>Items Removed</button>

        <p>Total Price: {price * items}</p>
        <button onClick={totalPrice}>Total Price</button>

    </div>

    );
}
export default QuantitySelector