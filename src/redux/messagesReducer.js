const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const messageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText
            }
            state.dialogData.push({ id: 3, name: 'Andriy'});
            state.messageData.push(newMessage);

            return state;

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.messageText;

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateMessageTextCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, messageText: text});

export default messageReducer;