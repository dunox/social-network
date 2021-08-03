const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";


export let store = {
    _state: {
        profilePage: {
                postData: [
                    { id: 1, message: 'This is my first post', likesCounter: 12},
                    { id: 1, message: 'I\'m fine', likesCounter: 27},
                ],
                newPostText: '',
    
        },
        messagePage: {
                messageData: [
                    { id: 1, message: 'One message'},
                    { id: 2, message: 'Another message'},
                ],
    
                dialogData: [
                    { id: 1, name: 'Andriy'},
                    { id: 2, name: 'Oksana'},
                ],
                newMessageText: '',
        },
    },

    _callSubscriber() {
        console.log('state is changed');
    },
    
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === "SEND-MESSAGE") {
            let newMessage = {
                id: 3,
                message: this._state.messagePage.newMessageText
            }
            this._state.messagePage.dialogData.push({ id: 3, name: 'Andriy'});
            this._state.messagePage.messageData.push(newMessage);
            this._callSubscriber(this._state);
        } else if(action.type === "UPDATE-MESSAGE-TEXT") {
            this._state.messagePage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        } else if(action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);
        } else if(action.type === "UPDATE-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },

}

export const addPostCreator = () => ({type: ADD_POST});

export const updatePostTextCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateMassegeTextCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, messageText: text})

window.store = store;