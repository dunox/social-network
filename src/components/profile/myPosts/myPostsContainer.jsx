// Core
import React from 'react';
import { connect } from "react-redux";

// Components
import { MyPosts } from "./index";

// Other
import { updatePostTextCreator, addPostCreator } from './../../../redux/profileReducer'

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostTextUpdate: (postText) => {
            dispatch(updatePostTextCreator(postText));
        },
        addPost: () => {
            dispatch(addPostCreator());
            dispatch(updatePostTextCreator(''))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);