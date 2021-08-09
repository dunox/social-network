// Core
import React from 'react';

// Components
import { Post } from './post';
import { TextareaAutosize } from '@material-ui/core';
import { Button } from '@material-ui/core';

// Other
import styles from './styles/index.module.scss';

export const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const addNewPost = () => {
        props.addPost();
    }

    const onChange = () => {
        let postText = newPostElement.current.value;
        props.onPostTextUpdate(postText);
    }
    
    const postElementJSX = props.posts.map( post => <Post message={post.message} likesCounter={post.likesCounter}/> );

    return (
        <div className={styles.posts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <TextareaAutosize
                    ref={newPostElement} 
                    cols="30" 
                    rows="5"
                    onChange={onChange}
                    value={props.newPostText}
                    />
                </div>
                <div>
                    <Button variant="outlined" color="primary" onClick={addNewPost}>Add Post</Button>
                </div>
            </div>
            <div className={styles.postsBlock}>
                { postElementJSX }
            </div>

        </div>
    )
}