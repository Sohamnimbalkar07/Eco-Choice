import  axios  from "axios";
const BASE_API_URL="http://localhost:9090/api/auth/signin" ;
class LoginService{
   
    authenticateUser(user)
    {
        return axios.post(BASE_API_URL,user);
    }

}
export default new LoginService();