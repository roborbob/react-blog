import React from 'react';
import styles from './Article.module.scss';

const article = (props) => {

    return (
        <div onClick={props.clicked} className={styles.Article}>
            <div className={styles.Title}>{props.title}</div>
            <div className={styles.Author}>Author: {props.author}</div>
        </div>
    )
}

export default article;