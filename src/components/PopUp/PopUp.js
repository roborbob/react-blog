import React from 'react';
import styles from './PopUp.module.scss';

const popUp = (props) => {
    return (
        <div className={styles.PopUp}>
            {/* <p>Are you sure you want to delete this article?</p>
            <button>Yes</button>
            <button>No</button> */}
            <p>The article "{props.title}" has been deleted from your library.</p>
        </div>
    )
}

export default popUp;