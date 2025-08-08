// ✅ 4. Form Input Tracker
//     Track values of name, email, and password.
//     Display input values in real-time below the form.

import React, {useState} from 'react'
// import PropTypes from 'prop-types'

function FormTracker(){
const [name, setName] = useState('Guest')
const [email, setEmail] = useState('email@gmail.com')
const [password, setPassword] = useState('#####')


const createName = () =>{
    setName('Tendo Calvin')
}

const createEmail = () =>{
    setEmail('tendo@gmail.com')
}


const createPassword = () =>{
    setPassword('45684')
}



    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={createName} className='button-container'>Name Button</button>

            <p>Email: {email}</p>
            <button onClick={createEmail} className='button-container'>Email Button</button>


            <p>Password: {password}</p>
            <button onClick={createPassword} className='button-container'>Password Button</button>
        </div>
    );
}

export default FormTracker