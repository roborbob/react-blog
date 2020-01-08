import React, { Component } from 'react';
import styles from './FullArticle.module.scss';
import PopUp from '../../components/PopUp/PopUp';
import axios from '../../axios';

class FullArticle extends Component {
    state = {
        loadedArticle: null,
    }

    componentDidMount () {
        this.loadData();
    }

    deleteArticleHandler= () => {
        return <PopUp/>
        // axios.delete('/library/' + this.props.match.params.id + ".json")
        //     .then(response => {
        //         console.log(response);

        //     });
    }


    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedArticle || (this.state.loadedArticle && this.state.loadedArticle.id !== +this.props.match.params.id) ) {
                axios.get( '/library/' + this.props.match.params.id + '.json')
                    .then( response => {
                        this.setState( { loadedArticle: response.data } );
                    } );
            }
        }
    }

    render() {

        let article = <p>Something better be happening!</p>;

        if ( this.props.match.params.id ) {
            article = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedArticle) {
            article = (

                <div className={styles.loadedArticle}>
                    <h1>{this.state.loadedArticle.title}</h1>
                    <p>{this.state.loadedArticle.content}</p>
                    <h3>{this.state.loadedArticle.author}</h3>
                    <button onClick={this.deleteArticleHandler}>Delete</button>
                </div>
            )
        }
        return article
            
    }
}

export default FullArticle;