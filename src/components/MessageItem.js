import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({ date, profileImageUrl, text, username, messageId, removeMessage, isCorrectUser }) => {
    // console.log(messageId, removeMessage)
    // const handleDelete = (e) => {
    //     removeMessage(messageId);
    // }
    return (
        <div>
            <li className="list-group-item">
                <img 
                    src={profileImageUrl || DefaultProfileImg } 
                    alt={username} 
                    height='100'
                    width='100'
                    className='timeline-image'    
                />
                <div className="message-area">
                    <Link to='/'>@{username} &nbsp;</Link>
                    <span className="text-muted">
                        <Moment 
                            className='text-muted'
                            format='Do MMM YYYY'
                        >
                            {date}
                        </Moment>
                    </span>
                    <p>{text}</p>
                {/* <button type='button' onClick={handleDelete}>DELETE</button> */}

                {isCorrectUser && (
                <a href='# ' className='btn btn-danger' onClick={(e) => removeMessage()}>DELETE</a>
                )}
                </div>

            </li>
        </div>
    );
}

export default MessageItem;
