import AddGame from './../components/AddGame.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
import UserGameEditList from './../components/UserGameEditList';
import EditProfile from './../components/EditProfile';
import constant from './../constant.js';
import './../css/ProfilePage.css';
import GameContext from './../context/GameContext';
import {useContext} from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';



const ProfilePage = (props) => {
    const {loginStatus, user,userLogin} = useContext(GameContext);
    const [searchInput, setSearchInput] = useState("");
    const [games,setGames] = useState([]);
    const [approvedGames, setApprovedGames] = useState([]);
    const [inProgressGames, setInProgressGames] = useState([]);
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        address: ""
    });
    const [editMadal, setEditMadal] = useState(false);
    const [addMadal, setAddMadal] = useState(false);
    const getUserInfo = ()=>{
       // console.log(user);
        fetch(constant.databaseUrl+'/loginPage', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                userName: user.userName,
                password: user.password
            })
        })
        .then(response=>response.json()).then(result=>{
            setUserInfo(user);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    const getGamesByUser = ()=> {
        console.log(user.userNum);
        fetch(constant.databaseUrl+'/games?user='+user.userNum)
        .then(response=>response.json())
        .then(result=>{
            setGames(result);
            var approved = result.filter(game=>game.isApproved);
            setApprovedGames(approved);
            var inProgress = result.filter(game=>!game.isApproved);
            setInProgressGames(inProgress);
            console.log(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    const getGamesByInput = () =>{
        if (searchInput !== "") {
            var filteredGames = games.filter(item => item.gameName.toLowerCase().includes(searchInput.toLowerCase()));
            var approved = filteredGames.filter(game=>game.isApproved);
            setApprovedGames(approved);
            var inProgress = filteredGames.filter(game=>!game.isApproved);
            setInProgressGames(inProgress);
        } else {
            var approved = games.filter(game=>game.isApproved);
            setApprovedGames(approved);
            var inProgress = games.filter(game=>!game.isApproved);
            setInProgressGames(inProgress);
        }
    }
    const phoneFormat = (p)=>{
        if (p === undefined) {
            return "";
        }
        return p.substring(0,3)+"-"+p.substring(3,6)+"-"+p.substring(6,10);
    }
    const turnOffMadal = () => {
        setEditMadal(false);
        setAddMadal(false);
    }

    useEffect(()=>{
        console.log(user);
        if (loginStatus) {
            getGamesByUser();
        }
    },[loginStatus, user]);
    if (!loginStatus) {
        return (
            <>
                <Header/>
                <Navigation/>
                <p> cannot find the user, please <Link to="/loginPage">login</Link></p>
            </>
        )

    } else {
    return (
        <>
            <Header/>
            <Navigation/>
            <div className={editMadal || addMadal ? "user-profile-container disabled":"user-profile-container"}>
                <div className="user-info-container">
                    <div className="user-name">
                        {user.firstName + " " + user.lastName}
                    </div>
                    <div className="user-info-detail">
                        <div className ="user-info-item">
                            {user.email}
                        </div>
                        <div className ="user-info-item">
                            {phoneFormat(user.phoneNum)}
                        </div>
                        <div className="user-info-item">
                            {user.address}
                        </div>
                        <button className="user-save" onClick={()=>{
                            setEditMadal(true);
                        }}>
                            Edit
                        </button>
                    </div>
                </div>
                <div className="user-games-container">
                    <input className="user-games-search" placeholder="Search" value={searchInput} onChange={(event)=>{
                        setSearchInput(event.target.value);
                    }} onKeyDown={(event)=>{
                        if (event.keyCode === 13) {
                            getGamesByInput();
                        }
                    }}>
                    </input>
                    <div className="user-games-pane">
                        <UserGameEditList title="user-review games" lists={inProgressGames} />
                        <UserGameEditList title="approved games" lists={approvedGames} />
                    </div>
                </div>
                <button className="add-game-button" onClick={()=>{
                    setAddMadal(true);
                }}>Upload game</button>
            </div> 
            <div className={editMadal ? "edit-profile-container" : "edit-profile-container hidden"}>
                <EditProfile user={userInfo} turnOffMadal={turnOffMadal}/>
            </div>
            <div className={addMadal ? "add-game-container" : "add-game-container hidden"}>
                <AddGame turnOffMadal={turnOffMadal}/>
            </div>
            
        </>
    )}
}

export default ProfilePage