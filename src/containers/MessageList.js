import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

// const MessageList = ({ messages, fetchMessages }) => {
//     // console.log(messages, 'my messages')
//     let counter = 0;
//     useEffect(() => {
//         // fetchMessages();
//         counter++
//         console.log(counter)
//     });
//     // const mymessages = messages.map(val => <li key={val._id}>{val.text}</li>);
//     return (
//         <div>
//             {/* {mymessages} */}
//         </div>
//     );
// };

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const { messages, removeMessage, currentUser } = this.props
        const messageList = messages.map(val => (
            <MessageItem 
                key={val._id} 
                date={val.createdAt} 
                text={val.text}
                username={val.user.username}
                profileImageUrl={val.user.profileImageUrl}
                messageId={val._id}
                // removeMessage={removeMessage.bind(this, val.user._id, val._id)}
                removeMessage={removeMessage.bind(this, val.user._id, val._id)}
                isCorrectUser={currentUser === val.user._id}
                />
        ));

        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <div className="list-group" id="messages">
                        { messageList }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.message,
        currentUser: state.currentUser.user.id
    };
}


export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList);