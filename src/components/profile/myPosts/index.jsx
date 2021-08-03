// Core
import React from 'react';

// Components
import {Post} from './post';

// Other
import styles from './styles/index.module.scss';
import {updatePostTextCreator, addPostCreator} from './../../../redux/profileReducer'


export const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const newPost = () => {
        props.dispatch(addPostCreator());
        props.dispatch(updatePostTextCreator(''))
    }

    const onChange = () => {
        let postText = newPostElement.current.value;
        props.dispatch(updatePostTextCreator(postText));
    }
    
    const postElementJSX = props.posts.map( post => <Post message={post.message} likesCounter={post.likesCounter}/> );

    return (
        <div className={styles.posts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea 
                    ref={newPostElement} 
                    cols="30" 
                    rows="5"
                    onChange={onChange}
                    value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={newPost}>Add Post</button>
                </div>
            </div>
            <div className={styles.postsBlock}>
                { postElementJSX }
            </div>

        </div>
    )
}