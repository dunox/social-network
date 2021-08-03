// Core
import React from 'react';

// Components
import { DialogItem } from "./dialogItem/dialogItem";
import { MessageItem } from "./messageItem/messageItem";

// Other
import styles from './styles/index.module.scss';
import {updateMessageTextCreator, sendMessageCreator} from './../../redux/messagesReducer'


export const Dialogs = (props) => {
  const newMessageItem = React.createRef();

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
    props.dispatch(updateMessageTextCreator(''));
  }
  
  const updateMessageText = () => {
    let messageText = newMessageItem.current.value;
    props.dispatch(updateMessageTextCreator(messageText));
  }
  const dialogElementJSX = props.messagePage.dialogData.map( dialog => <DialogItem  name={dialog.name} id={dialog.id} /> );
  const messageElementJSX = props.messagePage.messageData.map( message => <MessageItem message={message.message} id={message.id}/> );

  return (
    <div className={styles.dialogs}>
     <div className={styles.dialogList}>
         { dialogElementJSX }
     </div>
     <div className={styles.messageList}>
         { messageElementJSX }
     </div>
     <textarea 
        ref={newMessageItem}
        onChange={updateMessageText}
        value={props.messagePage.newMessageText}
        name="" 
        id="" 
        cols="30" 
        rows="5"
      />
            <button onClick={onSendMessageClick}> Add message</button>
    </div>
  )
}