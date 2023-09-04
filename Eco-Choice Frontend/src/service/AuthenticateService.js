import { Component } from 'react'

class AuthenticateService extends Component
{
    farmerLogin(id)
    {
        const type = "farmer"
        sessionStorage.setItem('authenticatedUser',id);
        sessionStorage.setItem('userType',type);
    }

    customerLogin(id)
    {
        const type = "customer"
        sessionStorage.setItem('authenticatedUser',id);
        sessionStorage.setItem('userType',type);
    }

    adminLogin(id){
        const type = "admin"
        sessionStorage.setItem('authenticatedUser',id);
        sessionStorage.setItem('userType',type);
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('userType');
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem('authenticatedUser');

        if(user=== null)
        {
            return false;
        }
        else{
            return true;
        }
    }
}

export default new AuthenticateService();