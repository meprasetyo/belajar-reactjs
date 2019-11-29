
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Karyawan from '././components/Karyawan/Karyawan';
import Tabel from '././components/Tabel/Tabel'
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Welcome}/>
<Route path="/home" component={Home}/>
<Route path="/login" component={Login}/>
<Route path="/Signup" component={Signup}/>
<Route path="/karyawan" component={Karyawan}/>
<Route path="/tabel" component={Tabel}/>
<Route path="*" component={NotFound}/>
</Switch>
</BrowserRouter>
);
export default Routes;