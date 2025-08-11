// ✅ 2. Window Resize Tracker
//     Track window width & height using "window.innerWidth" and "window.innerHeight".
//     Update the dimensions in real time when the window resizes.

import React, {useEffect, useState} from 'react';

function WindowResize(){
const [width, setWidth] = useState(window.innerWidth)
const [height, setHeight] = useState(window.innerHeight)


useEffect(() =>{
    window.addEventListener('resize', handleResize)
    console.log("Event Listener Added")
    return () =>{
        window.removeEventListener('resize',handleResize)
        console.log("Event Listener Removed")
    }
}, [])

useEffect (() =>{
    document.title = `${width}  x ${height}`
}, [width, height])

const handleResize = () =>{
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
}
return(
    <div>
        <p>Width : {width}px</p>
        <p>Height : {height}px</p>
    </div>
);

}

export default WindowResize