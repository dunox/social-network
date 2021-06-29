import { rerenderEntireTree } from '../render';

export const state = {
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
            ]
    },
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCounter: 0
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export const addMessage = (messageText) => {
    let newMessage = {
        id: 3,
        message: messageText
    }
    state.messagePage.messageData.push(newMessage);
    state.messagePage.dialogData.push({ id: 3, name: 'Andriy'});
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}