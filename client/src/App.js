import './App.css';
import React from 'react';
import User from './components/user/user';

class App extends React.Component{
render(){
    return(
        <div>
            <h1>Main app component</h1>

            <User/>
        </div>
    )
}
}

export default App;
