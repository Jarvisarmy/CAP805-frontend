import AddGame from '../components/AddGame.js';
import UnApprovedSection from '../components/UnApprovedSection.js'
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import CategoryList from '../components/CategoryList.js';

const AdminPage = (props) => {
    
    return (
        <>
        <Header/>
        <Navigation/>
            <UnApprovedSection/>   
        </>
    )
}

export default AdminPage