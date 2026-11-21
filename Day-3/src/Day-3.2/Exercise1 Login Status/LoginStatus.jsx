import { useState } from 'react'
import './LoginStatus.css'


function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='login'>
      <h3 className="text-center">
        {isLoggedIn? "Welcome back!" : "Please log in."}
      </h3>
      <div className="text-center">
        <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>Button Click</button>
      </div>
    </div>
  )
}

export default LoginStatus