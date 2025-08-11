// Create a simple Weather App that fetches current weather from this API:
// 🔗 OpenWeatherMap API

import React, {useEffect, useState} from 'react';

function WeatherApp(){

    const [people, setPeople] = useState([]) //storing API data 
    const [loading, setLoading] = useState('true')  // show loading
    const [error, setError] = useState('null') // handling errors

    // 72ac43fa320f0a6a6f4cf09d53f33b6a
    
    useEffect(() =>{

        const fetchData = async() =>{
            try{
        const response = await fetch ('https://randomuser.me/api')
        if(!response.ok){
            throw new error(`HTTP error ! error: ${response.status}`)
        }

        const people = await response.json()
        setPeople(people)
            }catch(error){
               setError(error.message)
            }finally{
                setLoading(false)
            }
        }

        fetchData();
    }, [])

    // UI conditions

    if(loading) return <p>Loading people ....</p>
    if(error) return <p>Error: {error}</p>


    return(
        <div>
            <h2>People</h2>
            <ul>
                {people.map(person =>{
                    <li key={person.id}><strong>{person.name}</strong>-{person.email}</li>
                })}
            </ul>
        </div>
    )

}

export default WeatherApp

