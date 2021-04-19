import AddGame from '../components/AddGame.js';
import UnApprovedSection from '../components/UnApprovedSection.js'
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import CategoryList from '../components/CategoryList.js';
import constant from './../constant.js';
import GameContext from './../context/GameContext';
import {useContext} from 'react';
import {useState,useEffect} from 'react';

const AdminPage = (props) => {
    const {user, setUser} = useContext(GameContext);

    const checkLogin = () =>{
        fetch(constant.databaseUrl+ '/login', {credentials: 'include'})
        .then(response=>response.json()).then(result=>{
            console.log(result);
            if(result.loggedIn){
                let userObj = {
                    userName: result.user.userName,
                    password: result.user.password,
                    firstName: result.user.firstName,
                    lastName : result.user.lastName,
                    email: result.user.email,
                    phoneNum: result.user.phoneNum,
                    address: result.user.address,
                    isAdmin: result.user.isAdmin
                }
                console.log(userObj);
    
                setUser(userObj);
               // setLoginStatus(true);
                //console.log(loginStatus);
            }
            
            //console.log(loginStatus);
            console.log(user);
        }).catch(err=>{
            console.log(err)
        });
    }

     useEffect(()=>{
        checkLogin();
        console.log(user);
        //setUserInfo(user);
        setUser(user);
    },[]);
    if (user === undefined || user.isAdmin === false) {
        return <p>Cannot Access</p>
    } else {
    return (
        <>
        <Header/>
        <Navigation/>
            <UnApprovedSection/>   
        </>
    )
}
}
export default AdminPage