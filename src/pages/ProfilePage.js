import AddGame from './../components/AddGame.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';

const ProfilePage = (props) => {
    
    return (
        <>
        <Header/>
        <Navigation/>
            <AddGame />      
        </>
    )
}

export default ProfilePage