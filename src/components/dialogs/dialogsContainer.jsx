// Core
import React from 'react';
import {connect} from "react-redux";

// Components
import {Dialogs} from "./index";

// Other
import {updateMessageTextCreator, sendMessageCreator} from './../../redux/messagesReducer'

let mapStateToProps = (state) => {
  return {
    dialogData: state.messagePage.dialogData,
    messageData: state.messagePage.messageData,
    newMessageText: state.messagePage.newMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (messageText) => {
      dispatch(updateMessageTextCreator(messageText));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
      dispatch(updateMessageTextCreator(''));
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);