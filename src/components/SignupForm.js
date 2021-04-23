import React from 'react'
import constant from './../constant.js';
import { useState } from 'react'
const SignupForm = () => {
    const [userSignup, setUserSignup] = useState("");
    const [passCreated, setPassCreated] = useState(""); 
    const [emailCreated, setEmailCreated] = useState("");
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");

    const validateForm = ()=>{
        return true;
    }
    const addForm = ()=>{
        if(validateForm()) {
                        
            const newUser={
                userName: userSignup,
                password: passCreated,
                firstName : firstName,
                lastName : lastName,
                phoneNum: phonenumber,
                email: emailCreated,
                isAdmin: false
            }; 
            fetch(constant.databaseUrl+'/signupPage', {
                method: 'POST',
                credentials: 'include',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(newUser)
            })
            .then(res=>{
            })
            .catch(err=>{
                console.log(err);
            });
            setUserSignup("");
            setPassCreated("");
            setFirstName("");
            setLastName("");
            setEmailCreated("");
            setPhoneNumber("")
            
        }
    }

    return (
        <div className = "container">
            <form className = "form-layout">
                <div class = "form-group">
                    <label>User Name</label>
                    <input type = "text" class = "form-control" placeholder = "Enter UserName " value = {userSignup} onChange = { (e) => setUserSignup(e.target.value)}/>
                </div>
                <div class = "form-group">
                    <label>Password</label>
                    <input type = "password" class = "form-control" placeholder = "Enter password" value = {passCreated} onChange = { (e) => setPassCreated(e.target.value)}/>
                </div>
                <div class = "form-group">    
                    <label>First Name</label>
                    <input type = "text" class = "form-control" placeholder = "Enter first name" value = {firstName} onChange = { (e) => setFirstName(e.target.value)}/>
                </div>    
                <div class = "form-group">
                    <label>Last Name</label>
                    <input type = "text" class = "form-control" placeholder = "Enter last name" value = {lastName} onChange = { (e) => setLastName(e.target.value)}/>
                </div>
                <div class = "form-group">    
                    <label>Email</label>
                    <input type = "email" class = "form-control" placeholder = "Enter Email" value = {emailCreated} onChange = { (e) => setEmailCreated(e.target.value)}/>
                </div>
                <div class = "form-group">    
                    <label>Phone no</label>
                    <input type = "phonenumber" class = "form-control" placeholder = "Enter Phone no" value = {phonenumber} onChange = { (e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div class = "form-group">    
                <button type="submit"  className="btn  login-btn btn-primary" onClick={addForm} >Sign Up</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default SignupForm
