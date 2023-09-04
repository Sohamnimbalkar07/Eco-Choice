import { Redirect } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import AuthenticateService from "./AuthenticateService";
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
class AuthenticatedRout extends Component
{
    render()
    {
        if(AuthenticateService.isUserLoggedIn())
        {
            return <Route {...this.props}/>
        }
        else{
            return <Redirect to="/"/>
        }
    }
}
export default AuthenticatedRout;