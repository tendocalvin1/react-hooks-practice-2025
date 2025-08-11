// ✅ 1. Document Title Changer
//     Update document.title with a counter value every time it changes.

import React, {useEffect, useState} from 'react'

function TitleUpdater(){
const [count, setCount] = useState(0)

const updateButton = ()=>{
    setCount(count => count + 1)
}

useEffect(()=>{
    document.title = `You have clicked the button ${count} times.`
}, [count])

return(

    <div>
        <p>Count : {count}</p>
        <button className='button-container'  onClick={updateButton}>Title Changer</button>

    </div>
);

}

export default TitleUpdater