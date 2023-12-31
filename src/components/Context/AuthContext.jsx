import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] =  useState(0);
  return (
    <AuthContext.Provider value={{ token, setToken, cartItem,setCartItem,totalPrice,setTotalPrice }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
