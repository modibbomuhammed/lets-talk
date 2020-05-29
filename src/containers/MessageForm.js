import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

const MessageForm = ({ errors, postNewMessage, history }) => {
    const [ message, setMessage ] = useState('')
    const handleNewMessage = (e) => {
        e.preventDefault();
        postNewMessage(message);
        setMessage('');
        history.push('/');
    };
    return (
        <form onSubmit={handleNewMessage}>
            {errors.message && (
                <div className="alert alert-danger">
                    {errors.message}
                </div>
            )}

            <input 
                type="text"
                className='form-control'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />

            <button className="btn btn-success pull-right">
                Add My Message
            </button>
        </form>
    );
}

function mapStateToProps(state){
    return {
        errors: state.errors
    };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm)
