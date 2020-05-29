import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
    isAuthenticated: false, // when user logs in should change to true
    user: {} // also change after login
};

export default (state = DEFAULT_STATE, { type, user }) => {
    switch(type){
        case SET_CURRENT_USER:
            return { 
                isAuthenticated: !!Object.keys(user).length,
                user
             };
        default:
            return state;
    }
};