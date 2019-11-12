import gql from 'graphql-tag'

const loginMutation = gql`
 mutation($username:String!,$password:String!){
  login(loginInput:{username:,password:"Ezulove21"}){
   firstName
  }
 }
`

export default {loginMutation}
