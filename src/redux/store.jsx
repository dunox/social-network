import messageReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);
    },

}

window.store = store;