import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Navigation from '../../components/Navigation/Navigation';
import Social from '../../components/UI/Social/Social';
import styles from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
        <Aux>
            <Navigation/>
            <Social/>
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Aux>    
    );
  }
}

export default Layout;
