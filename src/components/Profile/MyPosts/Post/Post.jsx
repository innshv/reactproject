import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://innashved.com/img/pic.jpg" alt="img"/>
            post 1
            <div>
            <span>Like</span>
            </div>
        </div>
            
        

    );
}
export default Post;
