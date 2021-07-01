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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state is changed');
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCounter: 0
        }
        this._state.profilePage.postData.push(newPost);
        this._callSubscriber(this._state);
    },
    
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 3,
            message: this._state.messagePage.newMessageText
        }
        this._state.messagePage.dialogData.push({ id: 3, name: 'Andriy'});
        this._state.messagePage.messageData.push(newMessage);
        this._callSubscriber(this._state);
    },
    
    updateNewMessageText(newText) {
        this._state.messagePage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}