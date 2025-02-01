import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
            e.preventDefault()
            setUser({username, password})
    }
  return (
    <>
      <div>
        <h2>Login</h2>
        <div>
            <p>Username</p>
            <input 
                type="text" 
                placeholder='username' 
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        <div>
            <p>Password</p>
            <input 
                type="text" 
                placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Login;
