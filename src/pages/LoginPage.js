import LogInForm from './../components/LogInForm.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
import {useContext} from 'react';
import {useState,useEffect} from 'react';
const LoginPage = (props) => {
    
    return (
        <>
        <Header/>
        <Navigation/>
            <LogInForm/> 
            
        </>
    )
}

export default LoginPage