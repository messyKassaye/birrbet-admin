import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import homeStyle from "./styles/homeStyle";
import {Link} from "react-router-dom";
import logo from '../assets/logo.svg'
import Login from "./login";
export const Home = (props)=>{
     const {classes} = props;
    return (
        <div>
            <AppBar className={classes.app_bar}>
                <Toolbar color='primary'>
                    <Link to={'/login'}>
                        <img
                            alt='Tablet Promotions'
                            src={logo}
                            width='62' height='55'
                            className={classes.brandIcon}/>
                    </Link>
                    <h3>Birr bet</h3>
                    <div className={classes.grow}/>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <Login/>
            </main>
        </div>
    )
}

export default withStyles(homeStyle)(Home)
