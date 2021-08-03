const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCounter: 0
            }
            state.postData.push(newPost);

            return state;

        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;

            return state;

        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updatePostTextCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;