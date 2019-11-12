import Cookies from 'js-cookie'


const JWT_TOKEN = 'token'
export const isAuthenticated = ()=>{
    if(Cookies.get(JWT_TOKEN)){
        return true
    }
    return  false
}
