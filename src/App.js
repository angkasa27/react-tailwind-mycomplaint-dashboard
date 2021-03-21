import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pengaduan from './pages/Pengaduan';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import { getToken } from './utils/storage';
import { useLocation, useHistory } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  const history = useHistory();

  const noAuthRoutes = ['/login', '/Login', '/Register', '/register'];
  const noAuth = noAuthRoutes.some((r) => location.pathname.match(r));

  useEffect(() => {
    if (!getToken() && !noAuth) {
      history.push('/login');
    } else if (getToken() && noAuth) {
      // history.push('/dashboard');
      console.log('mantap');
    }
  }, [location.pathname]);

  return (
    <div className=" bg-gray-50  text-gray-600 min-h-screen">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/pengaduan" component={Pengaduan} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}
