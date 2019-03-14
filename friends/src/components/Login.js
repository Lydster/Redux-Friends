import React from 'react';
import {connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import {login} from '../actions';
import { EEXIST } from 'constants';

class Login extends React.Component {
    state = {
        credentials: {
            usernamee: '',
            password: ''
        }
    }
    
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        }) 
    }

    login = e => {
        e.preventDefault();
        this.props
        .login(this.state.credentials)
        .then(() => this.props.history.push('/private'));
    }

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="username"
                    />
                    <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                </form>
                <button>Log in</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, {login})(Login)