// Core
import React from 'react';

// Components
import {Post} from './post';

// Other
import styles from './styles/index.module.scss';

export const MyPosts = (props) => {

    const postElementJSX = props.posts.map( post => <Post message={post.message} likesCounter={post.likesCounter}/> );

    return (
        <div className={styles.posts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={styles.postsBlock}>
                { postElementJSX }
            </div>

        </div>
    )
}