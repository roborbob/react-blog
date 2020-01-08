import React from 'react';
import styles from './Article.module.scss';

const article = (props) => {

    // let time = props.time.toString();
    // console.log(time);

    // let date = new Date();
    // console.log(date);

    // let timeArray = date.getDate();
    // console.log(timeArray);

    return (
        <div onClick={props.clicked} className={styles.Article}>
            <div className={styles.Title}>{props.title}</div>
            {/* <div className={styles.Content}>{article.content}</div> */}
            <div className={styles.Author}>Author: {props.author}</div>
            {/* <div className={styles.Author}>Date: {props.time}</div> */}
        </div>
    )
}

export default article;