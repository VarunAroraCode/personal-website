import './App.css';
import React from 'react';
import User from './components/user/user';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import TopBar from './components/TopBar';

class App extends React.Component{
render(){
    return(
        <Router>
            <TopBar/>
            <Navbar/>
            <User/>
        </Router>
    )
}
}

export default App;
