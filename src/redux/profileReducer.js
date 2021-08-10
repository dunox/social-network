const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
    postData: [
        { id: 1, message: 'This is my first post', likesCounter: 12},
        { id: 1, message: 'I\'m fine', likesCounter: 27},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCounter: 0
            }
            let stateCopy = {...state};

            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);

            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;

            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updatePostTextCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;