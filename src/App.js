import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Head';
import UserSave from './components/UserSave';
import Todolist from './components/Todolist';
import Login from './components/assests/UserAuth';
import "./components/UserSave";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header title="To-Do-List" />
          <UserSave />
          <Footer />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
