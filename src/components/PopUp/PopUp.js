import React from 'react';
import styles from './PopUp.module.scss';

const popUp = (props) => {
    return (
        <div className={styles.PopUp}>
            <p>Are you sure you want to delete this article?</p>
            <button>Yes</button>
            <button>No</button>
        </div>
    )
}

export default popUp;