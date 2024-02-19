import  axios  from "axios";
const BASE_API_URL="http://localhost:9090/api/auth/signup" ;
class RegistrationService{
   
    addUserDetails(formData)
    {
        console.log("in registerservice",formData);
        return axios.post(BASE_API_URL,formData);
    }

}
export default new RegistrationService() ;