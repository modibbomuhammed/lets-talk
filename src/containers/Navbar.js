import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';
import { logout } from '../store/actions/auth';

const Navbar = ({ currentUser, logout }) => {
    const logOut = (e) => {
        e.preventDefault();
        logout();
    }
    return (
        <nav className='navbar navbar-expand'>
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink to='/' className='navbar-brand'>
                        <img src={Logo} alt="warbler Home"/>
                    </NavLink>
                </div>
                {currentUser.isAuthenticated ? (
                    <ul className="navbar-nav nav navbar-right">
                        <li>
                            <NavLink to={`/users/${currentUser.user.id}/messages/new`}>
                                New Message
                            </NavLink>
                        </li>

                        <li>
                            <a href='# ' onClick={logOut}>Log-out</a>
                        </li>
                    </ul>
                ) : (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signin'>Log in</NavLink>
                    </li>
                </ul>
                )}
            </div>
        </nav>
    )
};

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { logout })(Navbar);