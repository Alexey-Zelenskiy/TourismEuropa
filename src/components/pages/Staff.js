import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import {Link} from "react-router-dom";
export default withAuth(
class Staff extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: '',
        currentUserCity: '',
        authenticated: null
    };
    checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    };

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async () => {
        this.props.auth.login('/');
    };

    logout = async () => {
        this.props.auth.logout('/');
    };
    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserCity: idToken.idToken.claims.city,
            currentUserName: idToken.idToken.claims.name
        });
    }

    render() {
        const { currentUserEmail, currentUserName ,currentUserCity} = this.state;

        return (
            <section id="banner">
                <div className="content">
            <div>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Tourism Around the World.
                    </Link>

                <ul id="nav" className="nav">
                    <li className="current">
                        <Link className="nav-link" to="/">
                            Главная
                        </Link>
                    </li>
                </ul>
                </div>

                <h1>Welcome {currentUserName}</h1>
                <p>Email: {currentUserEmail}

                </p>
                    <p> City: {currentUserCity}</p>

                <p>You have reached the authorized staff area of the portal</p>
                <button className="btn btn-light btn-lg" onClick={this.logout}>
                    Logout
                </button>
            </nav>
            </div>
            </div>
            </section>
        );
    }
}

);
