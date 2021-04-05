import AddGame from './../components/AddGame.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
import UserGameEditList from './../components/UserGameEditList';
import EditProfile from './../components/EditProfile';
import constant from './../constant.js';
import './../css/ProfilePage.css';
import {useState,useEffect} from 'react';



const ProfilePage = (props) => {
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
        fetch(constant.databaseUrl+'/loginPage', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                userName: "jarvis",
                password: "123456"
            })
        })
        .then(response=>response.json()).then(result=>{
            if (result.length !== 0) {
                setUserInfo(result[0]);
            }
        })
        .catch(err=>{
            console.log(err);
        });
    }
    const getGamesByUser = ()=> {
        fetch(constant.databaseUrl+'/games?user=1')
        .then(response=>response.json())
        .then(result=>{
            setGames(result);
            var approved = result.filter(game=>game.isApproved);
            setApprovedGames(approved);
            var inProgress = result.filter(game=>!game.isApproved);
            setInProgressGames(inProgress);
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
        return p.substring(0,3)+"-"+p.substring(3,6)+"-"+p.substring(6,10);
    }
    const turnOffMadal = () => {
        setEditMadal(false);
        setAddMadal(false);
    }

    useEffect(()=>{
        getGamesByUser();
        getUserInfo();
    },[]);
    return (
        <>
            <Header/>
            <Navigation/>
            <div className={editMadal || addMadal ? "user-profile-container disabled":"user-profile-container"}>
                <div className="user-info-container">
                    <div className="user-name">
                        {userInfo.firstName + " " + userInfo.lastName}
                    </div>
                    <div className="user-info-detail">
                        <div className ="user-info-item">
                            {userInfo.email}
                        </div>
                        <div className ="user-info-item">
                            {phoneFormat(userInfo.phoneNum)}
                        </div>
                        <div className="user-info-item">
                            {userInfo.address}
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
    )
}

export default ProfilePage