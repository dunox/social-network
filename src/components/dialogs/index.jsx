// Core
import React from 'react';

// Components
import { DialogItem } from "./dialogItem/dialogItem";
import { MessageItem } from "./messageItem/messageItem";

// Other
import styles from './styles/index.module.scss';


export const Dialogs = (props) => {
  const newMessageItem = React.createRef();

  const newMessage = () => {
    props.addMessage();
    props.updateNewMessageText('');
  }
  
  const updateMassegeText = () => {
    let messageText = newMessageItem.current.value;
    props.updateNewMessageText(messageText);
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
      onChange={updateMassegeText}
      value={props.messagePage.newMessageText}
      name="" 
      id="" 
      cols="30" 
      rows="5"
      ></textarea>
            <button onClick={newMessage}> Add message</button>
    </div>
  )
}