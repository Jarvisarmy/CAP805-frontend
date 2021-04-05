import React from 'react';
import './../css/ProfilePage.css';
import constant from '../constant';
import {useState, useEffect} from 'react';
const EditProfile = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [errorFname, setErrorFname] = useState("");
    const [errorLname, setErrorLname] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [errorAddress, setErrorAddress] = useState("");

    const validateForm = ()=>{
        var isValid = true;
        var reEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        var rePhone = new RegExp(/^\d{10}$/);
        if (fname === "") {
            setErrorFname("first name cannot be empty")
            isValid = false;
        } else {
            setErrorFname("");
        }
        if (lname === "") {
            setErrorLname("last name cannot be empty")
            isValid = false;
        } else {
            setErrorLname("");
        }
        if (!reEmail.test(email)) {
            setErrorEmail("the email is not valid");
            isValid = false;
        } else {  
            setErrorEmail("");
        }
        if (!rePhone.test(phone)) {
            setErrorPhone("the phone number is not valid");
            isValid = false;
        } else {
            setErrorPhone("");
        }
        if (address.length === 0) {
            setErrorAddress("the address cannot be empty");
            isValid= false;
        } else {
            setErrorAddress("");
        }
        return isValid;
    }
    const editProfile = ()=>{
        if(validateForm()) {
            
            fetch(constant.databaseUrl+'/users', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    userName: "jarvis",
                    password: "123456",
                    firstName: fname,
                    lastName: lname,
                    email: email,
                    phoneNum: phone,
                    address: address
                })
            })
            .then(response=>response.json()).then(result=>{
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            });
            window.location.href="/profilePage";
        }
    }
    const initialize = ()=>{
        setFname(props.user.firstName);
        setLname(props.user.lastName);
        setPhone(props.user.phoneNum);
        setEmail(props.user.email);
        setAddress(props.user.address);
    }
    useEffect(()=>{
        initialize();
    },[props.user])
    return (
        
        <section>
            <form>
                <div className="form-control-container">
                    <label htmlFor="fname"> First Name </label>
                    <input className="form-control" type="text" id="fname" value={fname} onChange={(event)=>{
                        setFname(event.target.value);
                    }}/>
                    <span className="alert-content" >{errorFname}</span>
                </div>
                <div className="form-control-container">
                    <label htmlFor="lname"> Last Name </label>
                    <input className="form-control" type="text" id="lname" value={lname} onChange={(event)=>{
                        setLname(event.target.value);
                    }}/>
                    <span className="alert-content" >{errorLname}</span>
                </div>
                <div className="form-control-container">
                    <label htmlFor="email"> Email </label>
                    <input className="form-control" type="text" id="email" value={email} onChange={(event)=>{
                        setEmail(event.target.value);
                    }}/>
                    <span className="alert-content" >{errorEmail}</span>
                </div>
                <div className="form-control-container">
                    <label htmlFor="phone"> Phone Number </label>
                    <input className="form-control" type="text" id="phone" value={phone} onChange={(event)=>{
                        setPhone(event.target.value);
                    }}/>
                    <span className="alert-content" >{errorPhone}</span>
                </div>
                <div className="form-control-container">
                    <label htmlFor="address"> Address </label>
                    <input className="form-control" type="text" id="lname" value={address} onChange={(event)=>{
                        setAddress(event.target.value);
                    }}/>
                    <span className="alert-content" >{errorAddress}</span>
                </div>
                
                <div className="form-control-container">
                    <a type="button" onClick={editProfile}>Save </a>
                    <a type="button" onClick={props.turnOffMadal}> cancel</a>
                </div>
            </form>
        </section>
    )
}

export default EditProfile
