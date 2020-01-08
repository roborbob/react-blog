import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from '../src/hoc/Layout/Layout';
import styles from './App.module.scss';
import Blog from './containers/Blog/Blog';
import Create from './containers/Blog/Create/Create';
import Library from './containers/Blog/Library/Library';
import FullArticle from './containers/FullArticle/FullArticle';
import Mountains from './components/Backdrop/Backdrop';

class App extends Component {
  render() {
    return (
        <div className={styles.App}>
          <Layout>
            <Route path="/" exact component={Blog}/> 
            <Route path="/create" exact component={Create}/> 
            <Route path="/library/" exact component={Library}/> 
            <Route path="/library/:id" exact component={FullArticle}/> 
            <Route path="/mountains" exact component={Mountains}/>
          </Layout>
        </div>
    );
  }
}

export default App;
