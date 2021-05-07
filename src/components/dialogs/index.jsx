// Core
import React from 'react';

// Components
import { DialogItem } from "./dialogItem/dialogItem";
import { MessageItem } from "./messageItem/messageItem";

// Other
import styles from './styles/index.module.scss';


export const Dialogs = (props) => {
    const dialogElementJSX = props.state.dialogData.map( dialog => <DialogItem  name={dialog.name} id={dialog.id} /> );
    const messageElementJSX = props.state.messageData.map( message => <MessageItem message={message.message} id={message.id}/> );

  return (
    <div className={styles.dialogs}>
     <div className={styles.dialogList}>
         { dialogElementJSX }
     </div>
     <div className={styles.messageList}>
         { messageElementJSX }
     </div>
    </div>
  )
}