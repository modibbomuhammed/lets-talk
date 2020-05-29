import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGES } from '../actionTypes';


const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const remove = id => ({
    type: REMOVE_MESSAGES,
    id
});


export const fetchMessages = () => {
    return dispatch => {
        return apiCall('get', 'https://goorm-ide-dev-env-srgbd.run-us-west2.goorm.io/api/messages')
        .then(res => dispatch(loadMessages(res)))
        .catch(err => dispatch(addError(err.message)));
    };
}

export const postNewMessage = text => (dispatch, getState) => {
    const { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall('post', `https://goorm-ide-dev-env-srgbd.run-us-west2.goorm.io/api/users/${id}/messages`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
}

// his method
// export const removeMessage = (userId, messageId) => {
    //     return dispatch => {
        //         return apiCall('delete', `https://goorm-ide-dev-env-srgbd.run-us-west2.goorm.io/api/users/${userId}/messages/${messageId}`)
        //                     .then(() => dispatch(remove(messageId)))
        //                     .catch(err => dispatch(addError(err.message)));
        //     };
        // }
        
export const removeMessage = (userId, messageId) => {
    return (dispatch, getState) => {
                // console.log(e, 'event')
                // this was giving me the error of the same user id hence i could delete other peoples messages
                // const { currentUser } = getState();
                // const userId = currentUser.user.id
        return apiCall('delete', `https://goorm-ide-dev-env-srgbd.run-us-west2.goorm.io/api/users/${userId}/messages/${messageId}`)
                    .then(() => dispatch(remove(messageId)))
                    .catch(err => dispatch(addError(err.message)));
    }
}
