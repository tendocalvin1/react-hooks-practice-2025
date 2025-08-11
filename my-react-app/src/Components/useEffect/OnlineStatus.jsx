// ✅ 3. Online/Offline Status Monitor
//     Use navigator.onLine and event listeners for 'online' and 'offline'.
//     Show a banner: "You're offline!" when disconnected.


import React, {useEffect, useState} from 'react'

function OnlineStatus(){

const [status, setStatus] = useState(navigator.onLine)


useEffect(()=>{
    const Status = ()=>{
        setStatus(navigator.onLine)
    }

    window.addEventListener('online', Status)
    window.addEventListener('offline', Status)

    return() =>{
        window.removeEventListener('online', Status)
        window.removeEventListener('offline', Status)
    }

}, [])



return (
    <div>
      {status ? (
        <p>You're online!</p>
      ) : (
        <div style={{ background: 'red', color: 'white', padding: '10px', textAlign: 'center' }}>
          You're offline!
        </div>
      )}
    </div>
  );

}
export default OnlineStatus