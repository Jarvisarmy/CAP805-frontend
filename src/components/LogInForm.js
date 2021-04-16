import React from 'react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import {useContext} from 'react';
import GameContext from "../context/GameContext";
const LogInForm = () => {
 
  const {userLogin} = useContext(GameContext);
  const [userForm, setUserForm] = useState('')
  const [passForm, setPassForm] = useState('') 

  const login = ()=>{
      
      let Obj = {
          userName: userForm,
          password: passForm,
      }
      //console.log(Obj)
      userLogin(Obj)
      
  }
    return (
        <div className = "formContainer form-group">
            <form className = "user-login">
                <div className =  "loginCenter grid"><FaUserCircle style={{fontSize:"110px"}} /></div>
                
                <div className = "form-control">
                    <input type = "text" placeholder = "Username" value = {userForm} onChange = { (e) => setUserForm(e.target.value)}/> 
                </div>
                <div className = "form-control">
                    <input type = "password" placeholder = "Password"  value = {passForm} onChange = { (e) => setPassForm(e.target.value)}  />
                </div>
                    
                <div className =  "row"> 
                    <div className = "col">
                    <button type="button" onClick = {login} className="btn  login-btn btn-primary">LOGIN</button>
                    </div>
                    <div className = "col"><a href = "/signupPage"> 
                        <button type="button"  className="btn  login-btn btn-primary" >Sign Up</button>
                    </a>
                    
                    </div>
                 </div>
                 
            </form>
         </div>
    )
}

export default LogInForm
