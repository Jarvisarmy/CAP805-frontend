import AddGame from './../components/AddGame.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
import UserGameEditList from './../components/UserGameEditList';
import './../css/ProfilePage.css';


const ProfilePage = (props) => {
    // these is fake lists, will be replaced by the data pulled from database later
    const fakeGamesList = [
        {
            gameNum: 1,
            gameName: "game1",
            gameUrl: "game Url",
            gameDescription: "game description",
            user_id: 1,
            category_id: 1
        },
        {
            gameNum: 2,
            gameName: "game2",
            gameUrl: "game Url",
            gameDescription: "game description",
            user_id: 1,
            category_id: 1
        },
        {
            gameNum: 3,
            gameName: "game3",
            gameUrl: "game Url",
            gameDescription: "game description",
            user_id: 1,
            category_id: 1
        },
        {
            gameNum: 4,
            gameName: "game4",
            gameUrl: "game Url",
            gameDescription: "game description",
            user_id: 1,
            category_id: 1
        },
        {
            gameNum: 5,
            gameName: "game5",
            gameUrl: "game Url",
            gameDescription: "game description",
            user_id: 1,
            category_id: 1
        }
    ]
    return (
        <>
            <Header/>
            <Navigation/>
            <div className="user-profile-contianer">
                <div className="user-info-container">
                    <div className="user-name">
                        Jarvis Zhang
                    </div>
                    <div className="user-info-detail">
                        <div className ="user-info-item">
                            username@gmail.com
                        </div>
                        <div className ="user-info-item">
                            410-322-4255
                        </div>
                        <div className="user-info-item">
                            130 columbia st, Waterloo, Ontario
                        </div>
                        <a className="user-save" href="/profilePage">
                            save
                        </a>
                    </div>
                </div>
                <div className="user-games-container">
                    <input className="user-games-search" placeholder="Search">
                    </input>
                    <div className="user-games-pane">
                        <UserGameEditList title="user-review games" lists={fakeGamesList} />
                        <UserGameEditList title="approved games" lists={fakeGamesList} />
                    </div>
                </div>
                <a className="add-game-button" href="/addGame">Upload game</a>
            </div> 
            
        </>
    )
}

export default ProfilePage