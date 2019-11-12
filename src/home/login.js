import React, {useState} from "react";
import {Container} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import loginStyle from "./styles/login_style";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import LoadingButton from "./widgets/LoadingButton";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Mutation} from 'react-apollo'
import {withRouter} from 'react-router-dom'
import gql from 'graphql-tag'
import {graphql} from "react-apollo";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import {connect} from "react-redux";
import {handleUnknownUserError} from "../state/action/ErrorsActions";
const LOGIN_MUTATION = gql`
 mutation loginMutation($username:String!,$password:String!){
  login(loginInput:{username:$username,password:$password}){
   firstName
   lastName
  }
 }
`



class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formData:{
                username:'',
                password:''
            },
            errorMessage:'',
            submitted: false,
            loading: false,
            finished: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e){
        const {formData} = this.state
        formData[e.target.name] = e.target.value
        this.setState(formData)
    }

    _confirm = async (mutation) => {
        this.props.history.push('/admin')

    }

    handleSubmit(){
        this.setState({
            submitted: true,
            loading: true
        })
       const {formData} = this.state
    }

    render() {
        const {classes} = this.props
        const {formData} = this.state
        const {loading} = this.state;
        const {finished} = this.state
        const setLoading = !finished && loading;
        const isEnabled = formData.username.length > 0 && formData.password.length > 0
        return (
            <Container maxWidth={'md'} className={classes.container}>
                <Card>
                    <CardHeader
                        className={classes.header}
                        title={"Admin gate"}
                    />
                    <CardContent>
                                    <ValidatorForm onSubmit={this.handleSubmit}>
                                        <Typography style={{color:red[500]}}>{this.props.errorMessage}</Typography>
                                        <Mutation
                                            mutation={LOGIN_MUTATION}
                                         variables={formData}
                                            onCompleted={(mutation)=>this._confirm(mutation)}
                                        >
                                            {
                                                mutation=>(
                                                    <div>
                                                        <TextValidator
                                                            className={classes.text_input}
                                                            label={'enter your phone number'}
                                                            onChange={this.handleChange}
                                                            name="username"
                                                            type='phone'
                                                            value={this.state.formData.username}
                                                        />

                                                        <TextValidator
                                                            className={classes.text_input}
                                                            label={'Enter your password'}
                                                            onChange={this.handleChange}
                                                            name="password"
                                                            type='password'
                                                            value={this.state.formData.password}
                                                            validators={['required']}
                                                            errorMessages={['Please enter your password']}
                                                        />

                                                        <div className={classes.login_btn}>
                                                            <LoadingButton
                                                                color="primary"
                                                                variant="contained"
                                                                onClick={mutation}
                                                                disabled={!isEnabled || this.state.submitted}
                                                                loading={setLoading}
                                                                text={'Login'}
                                                                done={finished}
                                                            >
                                                                {
                                                                    'Login'
                                                                }
                                                            </LoadingButton>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </Mutation>
                                    </ValidatorForm>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state=>({
    errorMessage: state.errorState.netWorkErrorMessage
})
export default connect(mapStateToProps,{handleUnknownUserError})
(withRouter(withStyles(loginStyle)(graphql(LOGIN_MUTATION)(Login))))
