import {useState, useEffect} from 'react';

import './../css/App.css';
import GameContext from "../context/GameContext";
import ModalContext from "../context/ModalContext";
import constant from './../constant.js';
import AdminPage from './../pages/AdminPage';
import PublicPage from './../pages/PublicPage';
import ProfilePage from './../pages/ProfilePage';
import CategoryPage from './../pages/CategoryPage';
import GamesPage from './../pages/GamesPage';
import AddGamePage from './../pages/AddGamePage';
import GameInfoPage from '../pages/GameInfoPage';

import action from '../img/action.jpg';
import adventure from '../img/adventure.jpeg';
import shooter from '../img/shooter.jpg';
import strategy from '../img/strategy.jpg';

import LoginPage from './../pages/LoginPage';
import SignUpPage from './../pages/SignUpPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import { json } from 'body-parser';
import { FaSalesforce } from 'react-icons/fa';

function App() {
    const [games, setGames] = useState([]);
    const [unApprovedGames, setUnApproveGames] = useState([]);
    const [users, setUsers] = useState([]);
    const [loginStatus, setLoginStatus] =  useState(false);
    const [gameCategory, setGameCategory] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [popupModaMessage, setPopupModalMessage] = useState({
        msg: '',
        visible: false
      });

      const [user, setUser] = useState({
        userNum: "",
        userName : "",
        password : "",
        firstName: "",
        lastName : "",
        email: "",
        phoneNum: "",
        address: "",
        isAdmin: false
    });

    const getGamesbyCategory=(inputCategoryId)=>
    {    
        let gamesList = games.filter((game)=>{     
            return game.categoryId===inputCategoryId
        })
        return gamesList;
    }
    

    
    const getAllGames = ()=>{
        fetch(constant.databaseUrl+'/games')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setGames(result);
            storeFilteredGames(games);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    const getGamesByCategoryId= (categoryId)=>{
        fetch(constant.databaseUrl+'/games/category/'+categoryId)
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
    
           // setGames(result);
            storeFilteredGames(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    const deleteGame = (gNum)=>{
        fetch(constant.databaseUrl+'/games/delete/'+gNum)
        .then(res=>{
            
        })
        .catch(err=>{
            console.log(err);
        });
        getAllGames();
        
    }

    const storeFilteredGames = (filteredGames) => {
        setFilteredGames(filteredGames);
      }

      const showModalMsg = () => {
     
        setPopupModalMessage({"msg":"Thanks for rating the game!!! Your opinion is important to us.", "visible":true});
      }
  

    /* useEffect(()=>{
        getAllGames();
    },[]); */

    const getAllCategory = ()=>{
      
        fetch(constant.databaseUrl+'/categories')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setGameCategory(result);})
            .catch(err=>{
                console.log(err);
            });
        }
        const getAllRatings = ()=>{      
            
            fetch(constant.databaseUrl+'/ratings')
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                setRatings(result);           
            })
            .catch(err=>{
                console.log(err);
            });
          
      }

        const hidePopupModal = () => {
            setPopupModalMessage({
              msg: "",
              visible: false
            })
          }
            
    const userLogin = (user)=>{
        fetch(constant.databaseUrl+'/loginPage', {
            method: 'POST',
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        })
        .then(response=>response.json()).then(result=>{
             //console.log(result);
            //console.log(loginStatus);
            // let userObj = {
            //     userName: result.userName,
            //     password: result.password,
            //     firstName: result.firstName,
            //     lastName : result.lastName,
            //     email: result.email,
            //     phoneNum: result.phoneNum,
            //     address: result.address,
            //     isAdmin: result.isAdmin
            // }
            // console.log(userObj);
            // setUser(userObj);
            // if(user === null ){
            //     console.log("made it here");
            //     setLoginStatus(false)
            // }
            // else{
            // console.log(user);  
            // setLoginStatus(true);
            // }
            
            checkLogin();
        })
        .catch(err=>{
            console.log(err);
        });
    }
//fetch request for games for admin to approve
    const getUnApprovedGames = ()=>{
        fetch(constant.databaseUrl+'/adminPage')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setUnApproveGames(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
// approving a game
    const approveGame = (gameNum)=>{
        console.log(gameNum);
        console.log(constant.databaseUrl+'/adminPage/' + gameNum);
        fetch(constant.databaseUrl+'/adminPage/' + gameNum)
        .then(response=>response.json()).then(result=>result.json())
        .catch(err=>{
            console.log(err);
        });
        getUnApprovedGames();
    }

//getting all users


const getAllUsers = ()=>{
    fetch(constant.databaseUrl+'/adminPage/users')
    .then(response=>response.json())
    .then(result=>{
        console.log(result);
        setUsers(result);
    })
    .catch(err=>{
        console.log(err);
    });
}

const deleteUser = (uNum)=>{
    fetch(constant.databaseUrl+'/adminPage/delete/'+ uNum)
    .then(res=>{
    })
    .catch(err=>{
        console.log(err);
    });
    getAllUsers();
    
}

 const userLogout = ()=>{
    setLoginStatus(false);
    fetch(constant.databaseUrl+'/logout')
    .then(res=>{
        console.log("Clicked!");
        window.location.href="/loginPage"; 
    })
    .catch(err=>{
        console.log(err);
    });
} 

// const userLogout = ()=>{
//     setLoginStatus(false)
//     fetch(constant.databaseUrl+'/logout', {
//         method: 'DELETE',
//         credentials: 'include',
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         })
//     }).then(response=>response.json())}

  const checkLogin = () =>{
    fetch(constant.databaseUrl+ '/login', {credentials: 'include'})
    .then(response=>response.json()).then(result=>{
        console.log(result);
        if(result.loggedIn){
            let userObj = {
                userNum: result.user.userNum,
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
            setLoginStatus(true);
            console.log(loginStatus);
        }
        else{
            setLoginStatus(false);
            alert("wrong password or user entered");
        }
        
        //console.log(loginStatus);
        console.log(user);
    }).catch(err=>{
        console.log(err)
    });
}  
/* useEffect(()=>{
    checkLogin();
    console.log(user.isAdmin);
},[loginStatus]); */

    useEffect(()=>{
        getAllGames();
        getAllCategory();
        getUnApprovedGames();
        getAllUsers();
        //checkLogin();
    },[]);

    return (
        <>         
        <GameContext.Provider value={{games, getAllGames, deleteGame,gameCategory,storeFilteredGames,filteredGames, userLogin,user, unApprovedGames, approveGame, users, deleteUser, loginStatus, userLogout, setUser,getGamesByCategoryId , setLoginStatus}}>
        <ModalContext.Provider value = {{showModalMsg,popupModaMessage,hidePopupModal}}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <PublicPage />
                    </Route>
                    <Route path="/profilePage">
                       <ProfilePage />
                    </Route>
                    <Route exact path="/categoryPage">
                        <CategoryPage />
                    </Route>
                    <Route path="/games">
                        <GamesPage />
                    </Route>
                    <Route path="/addGame">
                    <AddGamePage />
                    </Route>
                    <Route path="/loginPage">
                    {loginStatus ? <Redirect to= "/" /> : <LoginPage />}
                    </Route>
                    <Route path="/signupPage">
                        <SignUpPage />
                    </Route>
                    <Route path="/adminPage">
                    <AdminPage />
                    </Route>
                    <Route path="/game/:id" render={(props) => <GameInfoPage gameId={props.match.params.id} />} />
                </Switch>
            </Router>
            </ModalContext.Provider>
        </GameContext.Provider>
        </>
)};

export default App;
