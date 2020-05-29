import React from 'react';
// removed redirect from react-router-dom because we arent making use of it
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import MessageForm from './MessageForm';

const Main = ({ authUser, errors, removeError, currentUser }) => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' render={props => <Homepage {...props } currentUser={currentUser} /> } />
                <Route exact path='/signin' render={props => {
                    return (
                        <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText='Log in' heading='Welcome Back.'  {...props} />
                    )
                }} />

                <Route exact path='/signup' render={props => {
                    return (
                        <AuthForm signUp removeError={removeError} errors={errors} onAuth={authUser} buttonText='Sign me up!' heading='Join Warbler Today!.'  {...props} />
                    )
                }} />

                <Route path='/users/:id/messages/new/' component={withAuth(MessageForm)} />
            </Switch>
        </div>
    );
};

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
