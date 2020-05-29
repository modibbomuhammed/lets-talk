import { LOAD_MESSAGES, REMOVE_MESSAGES } from "../actionTypes";

export const message = (state = [], { type, messages, id }) => {
        switch(type){
            case LOAD_MESSAGES:
                return  [ ...messages ];
            case REMOVE_MESSAGES:
                return state.filter(val => val._id !== id);
            default:
                return state;
        };
};