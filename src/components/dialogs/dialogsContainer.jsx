// Core
import React from 'react';

// Components
import {Dialogs} from "./index";

// Other
import {updateMessageTextCreator, sendMessageCreator} from './../../redux/messagesReducer'
import StoreContext from "../../storeContext";



export const DialogsContainer = () => {

  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
          store.dispatch(updateMessageTextCreator(''));
        }

        const updateMessageText = (messageText) => {
          store.dispatch(updateMessageTextCreator(messageText));
        }
        return <Dialogs sendMessage={onSendMessageClick}
                 updateMessageText={updateMessageText}
                 dialogData={state.messagePage.dialogData}
                 messageData={state.messagePage.messageData}
                 newMessageText={state.messagePage.newMessageText}
        />
      }}
  </StoreContext.Consumer>
}