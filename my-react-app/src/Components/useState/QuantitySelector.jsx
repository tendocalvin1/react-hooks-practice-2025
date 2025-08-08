// ✅ 3. Quantity Selector
//     Create “+” and “–” buttons to increase or decrease item quantity (min 1).
//     Display total price = quantity * pricePerItem.

import React , {useState} from 'react'


function QuantitySelector(){
    const [items, setItems] = useState(1) // Start at 1 to respect minimum
    const pricePerItem = 100; // Fixed price per item
    
    

    const addItems = ()=>{
        setItems(i => i + 1)
    }

    const itemsRemoved = ()=>{
        setItems(i => (i > 1 ? i - 1 : 1)); // Prevent going below 1
    }

    return(
    <div>
        <p>Items Available: {items}</p>
        <button onClick={addItems}>Items Added</button>

        <p>Items Available: {items}</p>
        <button onClick={itemsRemoved}>Items Removed</button>

        <p>Total Price: {pricePerItem * items}</p>
        

    </div>

    );
}
export default QuantitySelector