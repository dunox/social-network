// Core
import React from 'react';

// Components
import { DialogItem } from "./dialogItem/dialogItem";
import { MessageItem } from "./messageItem/messageItem";
import { TextareaAutosize } from '@material-ui/core';
import { Button } from '@material-ui/core';

// Other
import styles from './styles/index.module.scss';


export const Dialogs = (props) => {
  const newMessageItem = React.createRef();

  const onSendMessageClick = () => {
    props.sendMessage();
  }
  
  const updateMessageText = () => {
    let messageText = newMessageItem.current.value;
    props.updateMessageText(messageText);
  }
  const dialogElementJSX = props.dialogData.map( dialog => <DialogItem  name={dialog.name} id={dialog.id} /> );
  const messageElementJSX = props.messageData.map( message => <MessageItem message={message.message} id={message.id}/> );

  return (
      <>
          <div className={styles.dialogs}>
              <div className={styles.dialogList}>
                  { dialogElementJSX }
              </div>
              <div className={styles.messageList}>
                  { messageElementJSX }
              </div>
          </div>
          <TextareaAutosize
              ref={newMessageItem}
              onChange={updateMessageText}
              value={props.newMessageText}
              name=""
              id=""
              cols="30"
              minRows="5"
          />
          <div>
              <Button
                  onClick={onSendMessageClick}
                  variant="outlined"
                  color="primary"
              >
                  Add message
              </Button>
          </div>

      </>

  )
}