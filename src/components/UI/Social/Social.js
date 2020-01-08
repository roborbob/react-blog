import React from 'react';
import Styles from './Social.module.scss';
import twitter from '../../../assets/Social/twitter.png';
import reddit from '../../../assets/Social/reddit.png';

const social = () => {
    return (

    <div className={Styles.Social}>
         <div className={Styles.Twitter}>
                <a href="https://www.bbc.com" target="_blank"><img src={twitter} alt="Twitter Icon"/></a>
            </div>
        <div className={Styles.Reddit}>
             <a href="https://www.three.js"><img src={reddit} alt="Reddit Icon"/></a>
        </div>
    </div>
        // <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    )
}

export default social;