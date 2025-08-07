import React, {useState} from 'react';
// ✅ 2. Color Picker
//     Create buttons for colors (red, blue, green).
//     When clicked, change the background color of a box using useState

function ColorPicker(){
    const [color, setColors] = useState('red');

// const stopCars = () =>{
//     setColors('red');
// }

// const readyCars = () =>{
//     setColors('blue');
// }


// const goCars = () =>{
//     setColors('green');
// }

const changeColor = () =>{
    setColors (c => {
        if (c === 'red' )return 'blue';
        if (c === 'blue' )return 'green';
    })
}

// function changeColor(){
//     setColor(c => c === 'green' ? 'red' : 'green')
// }

    return(
        <div style ={{padding:'10px'}}>
            {/* <p>colors : {colors}</p>
            <button onClick={stopCars} className='color-container'>Red button</button>

            <p>colors : {colors}</p>
            <button onClick={readyCars} className='color-container'>Blue button</button>

            <p>colors : {colors}</p>
            <button onClick={goCars} className='color-container'>Green button</button> */}

            <p style={{color : color}}>Current color : {color}</p>
            <button onClick={changeColor} className='color-container'>Change Color</button>
       
        </div>

    );
}

export default ColorPicker