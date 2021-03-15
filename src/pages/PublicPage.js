
import GameList from './../components/GameList.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
const PublicPage = (props) => {
    
    return (
        <>
        <Header/>
        <Navigation/>
            <GameList />
        
        </>
    )
}

export default PublicPage