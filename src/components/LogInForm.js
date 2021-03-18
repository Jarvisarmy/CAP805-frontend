import React from 'react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'


const LogInForm = () => {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

    return (
        <div className = "formContainer">
            <form className = "user-login">
                <div className =  "loginCenter grid"><FaUserCircle style={{fontSize:"110px"}} /></div>
                
                <div className = "form-control">
                    <input type = "text" placeHolder = "Username" value = {user} onChange = { (e) => setUser(e.target.value)}/> 
                </div>
                <div className = "form-control">
                    <input type = "text" placeHolder = "Password"  value = {pass} onChange = { (e) => setPass(e.target.value)}  />
                </div>
                    
                <div className =  "loginCenter grid"> <button type="button" className="btn  login-btn">LOGIN</button> </div>
                
            </form>
         </div>
    )
}

export default LogInForm
