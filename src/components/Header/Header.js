// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { useAuth, } from '../Context/AuthContext';

import './Header.css'; // Import the corresponding CSS file

const Header = () => {
    const {token, setToken} = useAuth();
    // console.log(token)

    const Logout = ()=>{
        setToken(null);
    }
  return (

    <div>
       { !token ? ( <div> For dummy Username and password please refer to <Link>https://dummyjson.com/users</Link> </div>) :
        (<nav className="navbar">
            <Link to="/" className="nav-item"><button>Home</button></Link>
            <Link to="/login" className="logout-button" onClick={Logout} > <button className="login-button">Logout</button></Link>
            <Link to="/cart" className="nav-item cart-button">Cart</Link>
        </nav>)}
    </div>
    
  );
};

export default Header;
