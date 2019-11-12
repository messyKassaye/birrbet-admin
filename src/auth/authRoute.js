import React from "react";
import {Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import {CssBaseline} from "@material-ui/core";
import {Dashboard} from "@material-ui/icons";
class AuthRoute extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <CssBaseline>
                <Switch>
                    <Route path='/' component={Dashboard} exact/>
                    <Route path={'/notifications'} component={Dashboard}/>
                </Switch>
            </CssBaseline>
        );
    }


}

export default AuthRoute
