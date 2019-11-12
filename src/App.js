import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoute from "./routes/private";
import Dashboard from "./auth/dashboard";
import Login from "./home/home";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from "./theme/appTheme";
import ApolloBoostClient from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
// react state management store
import {Provider} from 'react-redux'
import store from "./state/store";
import {handleNetworkErrors, handleUnknownUserError} from "./state/action/ErrorsActions";


const  uri ='https://devapi.birrbet.com/graphql';

const client = new ApolloBoostClient({
    uri: uri,
    fetchOptions:{
        credentials:'include'
    },
    onError:({graphQLErrors,networkError})=>{
        if(networkError){
            console.log('network error')
            handleNetworkErrors("Something is not right. Please check your connection ): ")
        }

        if (graphQLErrors){
            console.log(graphQLErrors)
        }
    }
})

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Router>
                    <Switch>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/admin'} component={Dashboard}/>
                        <PrivateRoute path={'/'} component={Dashboard}/>
                    </Switch>
                </Router>
            </ApolloProvider>
        </Provider>
        </MuiThemeProvider>
    );
  }

}
export default App;
