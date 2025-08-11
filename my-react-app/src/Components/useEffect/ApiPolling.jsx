// ✅ 4. API Polling

//     Fetch random user data from https://randomuser.me/api 
//     every 10 seconds using setInterval.

import React, {useState, useEffect} from 'react'


function API_Polling(){
    const [users, setUsers] = useState([]) // storing API data
    const [loading, setLoading] = useState(true) //show spinner/loading
    const [error, setError] = useState(null)  // handle errors

    useEffect(()=>{
        // async function inside useEffect
        const fetchUsers = async() =>{
                try{
            const response = await fetch('https://randomuser.me/api');
            if(!response.ok){
                throw new error(`HTTP error ! status: ${response.status}`)
            }
            const data = await response.json();
            setUsers(data)
                }catch(error){
                    setError(error.message)
                }finally{
                    setLoading(false)
                }
        }

        fetchUsers(); // call the function

    }, []); // empty array = run only once on mount




    // UI conditions
    if(loading) return <p>Loading users ....</p>
    if(error) return <p>Error: {error}</p>


    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user =>{
                    <li key={user.id}><strong>{user.name}</strong>-{user.email}</li>
                })}
            </ul>
        </div>
    )



}

export default API_Polling


// | Line                    | What's going on                    |
// | ----------------------- | ---------------------------------- |
// | `useEffect(...)`        | Runs once when component mounts    |
// | `fetch()`               | Makes HTTP request to external API |
// | `await response.json()` | Converts response to usable JSON   |
// | `setUsers(data)`        | Stores result in component state   |
// | `setLoading(false)`     | Signals data has finished loading  |
// | `setError(err.message)` | Stores any error if fetch fails    |



// ✅ Summary: Best Practices
//     ✅ Always use useEffect with an empty dependency array to fetch on mount.
//     ✅ Use async/await inside a function defined within useEffect.
//     ✅ Handle 3 states:

//         loading
//         data (success)
//         error
