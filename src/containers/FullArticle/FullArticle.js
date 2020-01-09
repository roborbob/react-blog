import React, { Component } from 'react';
import styles from './FullArticle.module.scss';
import PopUp from '../../components/PopUp/PopUp';
import axios from '../../axios';

class FullArticle extends Component {
    state = {
        loadedArticle: null,
        deleted: false
    }

    componentDidMount () {
        this.loadData();
    }

    deleteArticleHandler= () => {
        axios.delete('/library/' + this.props.match.params.id + ".json")
            .then(response => {
                this.setState({ deleted: true})
                console.log(response);

            });
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

        if (this.props.match.params.id ) {
            article = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }   
        if (this.state.loadedArticle && !this.state.deleted) {
            article = (

                <div className={styles.loadedArticle}>
                    <h1>{this.state.loadedArticle.title}</h1>
                    <p>{this.state.loadedArticle.content}</p>
                    <h3>{this.state.loadedArticle.author}</h3>
                    <button onClick={this.deleteArticleHandler}>Delete</button>
                </div>
            )
        }
        if (this.state.deleted) {
            article = (
                <PopUp
                    title={this.state.loadedArticle.title}
                />
            )
        }
        return article
            
    }
}

export default FullArticle;