import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { AuthProvider } from './components/Context/AuthContext';
import PrivateRoute from './components/Route/PrivateRoute';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Register from './components/Register/Register';


const App = () => {
  // const {token} =useAuth(); 
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<PrivateRoute/>}>
            <Route path='' element={<Home/>}/>
            <Route path='cart' element = { <Cart/> }/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element = { <Register/> } />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
