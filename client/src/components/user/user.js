import './user.css';
import React from 'react';

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount(){
        fetch('/api/user')
        .then(res => res.json())
        .then(user => this.setState({user}, () => console.log("user fetched",
         user)));
    }

render(){
    return(
        <div>
            <ul>
                {this.state.user.map(user =>
                    <li>
                        {user.firstName} {user.lastName}
                    </li>)}
            </ul>
        </div>
    )
}
}

export default User;
