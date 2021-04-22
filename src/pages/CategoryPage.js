import constant from './../constant.js';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import CategoryList from '../components/CategoryList.js';
import {useState,useEffect} from 'react';
import {useContext} from 'react';
import GameContext from "../context/GameContext";
const ProfilePage = (props) => {
    const {games} = useContext(GameContext);
    const {user, setUser, setLoginStatus} = useContext(GameContext);
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
                setLoginStatus(true);
                setUser(userObj);
            }
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

    return (
        <>
        <Header/>
        <Navigation/>
            <CategoryList/>    
        </>
    )
}

export default ProfilePage