// Core
import React from 'react';

// Components
import { MyPosts } from "./index";
import StoreContext from "../../../storeContext";

// Other
import {updatePostTextCreator, addPostCreator} from './../../../redux/profileReducer'




export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState();

            const addPost = () => {
                store.dispatch(addPostCreator());
                store.dispatch(updatePostTextCreator(''))
            }

            const updatePost = (postText) => {
                store.dispatch(updatePostTextCreator(postText));
            }

            return <MyPosts
                addPost={addPost}
                onPostTextUpdate={updatePost}
                newPostText={state.profilePage.newPostText}
                posts={state.profilePage.postData}
            />
            }
        }
    </StoreContext.Consumer>

}