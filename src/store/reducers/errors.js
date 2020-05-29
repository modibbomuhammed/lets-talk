import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';
                    
export default (state = {message: null}, { type, error }) => {
    switch(type){
        case ADD_ERROR:
            return { ...state, message: error};
        case REMOVE_ERROR:
            return { ...state, message: null };
        default:
            return state;
    }
};