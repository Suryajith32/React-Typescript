import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminRouteProtect from './AdminRouteProtect';
import './App.css';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import { UserAuthContextProvider } from './context/Authprovider';
import AdminHome from './pages/AdminHome/AdminHome';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import Feed from './pages/Feed/Feed';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ProtectedRoutes from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path='/' element={<Home />} >
                <Route path='profile' element={<Profile />} />
                <Route path='feed' element={<Feed />} />
              </Route>
            </Route>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            {/* <Route path="/" element={<AdminRouteProtect/>}> */}
              <Route path='/admin' element={<AdminHome />} >
              <Route path='dashboard' element={<Dashboard />} />
            {/* </Route> */}
            </Route>
            
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
