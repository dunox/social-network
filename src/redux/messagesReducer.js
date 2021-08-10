const  SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    messageData: [
        { id: 1, message: 'One message'},
        { id: 2, message: 'Another message'},
    ],
    dialogData: [
        { id: 1, name: 'Andriy'},
        { id: 2, name: 'Oksana'},
    ],
    newMessageText: '',
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 3,
                message: state.newMessageText
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                dialogData: [...state.dialogData, {id: 3, name: 'Andriy'}]
            }
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.messageText
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateMessageTextCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, messageText: text});

export default messageReducer;