import React, { Component } from 'react';
import axios from 'axios';
// import axios from '../../../axios';
import styles from './Library.module.scss';
import Article from '../../../components/Article/Article';
import { Route } from 'react-router-dom';
import FullArticle from '../../FullArticle/FullArticle';


class Library extends Component {

    state = {
        articles: [],
        loading: true
    }

    componentDidMount() {
        // console.log("Ready")
        // axios.get('https://www.tripadvisor.com') 
        axios.get('/library.json') 
            .then( response => {
                console.log(response)
                const fetchedArticles = [];
                for (let key in response.data) {
                    fetchedArticles.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({articles: fetchedArticles, loading: false});
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }

    fullPostHandler = (id) => {
        this.props.history.push( '/library/' + id );
    }

    render () {
        console.log(this.state.articles)
        return (
            <div className={styles.Library}>
                <h1>Articles</h1>
                <div className={styles.ArticleWrapper}>
                    {this.state.articles.map(article => (
                        <Article
                            key={article.id}
                            title={article.title}
                            content={article.content}
                            author={article.author}
                            time={article.time}
                            clicked={() => this.fullPostHandler(article.id)}
                        />                
                    ))}
                </div>
            </div>
        );
    }
}


export default Library;