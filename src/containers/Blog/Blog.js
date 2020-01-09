import React, { Component } from 'react';
import styles from './Blog.module.scss';
// import { Route } from 'react-router-dom';
// import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
    }

    // componentDidMount () {
    //     axios.get( '/library')
    //         .then( response => {
    //             const posts = response.data.slice(0, 4);
    //             const updatedPosts = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Rob'
    //                 }
    //             });
    //             this.setState({posts: updatedPosts});
    //             // console.log( response );
    //         } )
    // }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        // let posts = <p style={{textAlign: 'center'}}>Lack of content!</p>;
        // if (!this.state.error) {
        //     posts = this.state.posts.map(post => {
        //         return <Post 
        //             key={post.id} 
        //             title={post.title} 
        //             author={post.author}
        //             clicked={() => this.postSelectedHandler(post.id)} />;
        //     });
        // }

        return (
            <div className={styles.Blog}>
                <h2>Home Page</h2>
             
            </div>
        );
    }
}

export default Blog;