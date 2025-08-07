
import React, {useState} from 'react'

function EmojiSwitcher(){

    const [emoji, setEmoji] = useState('😊') // declare state


    const updateEmoji = () =>{
        setEmoji('😊😊😊')
    }
    return(
        <div>
            <p>Emojis : {emoji}</p>
            <button onClick={updateEmoji} className='emoji-container'>Emoji Button</button>
        </div>

    );
}

export default EmojiSwitcher