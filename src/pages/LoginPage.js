import LogInForm from './../components/LogInForm.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
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