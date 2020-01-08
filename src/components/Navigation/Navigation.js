import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from 'react-router-dom';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigation = () => {


  return (  
        <div className={styles.navigation}>
            <div className={styles.titleContainer}>
             <NavLink exact to="/"><h1>total recall</h1></NavLink>
        
                <div className={styles.navContainer}>
                    <NavigationItem link="/create">create +</NavigationItem> 
                    <NavigationItem link="/library">library</NavigationItem>
                </div>
            </div>
        </div>
    )
  }

export default navigation;