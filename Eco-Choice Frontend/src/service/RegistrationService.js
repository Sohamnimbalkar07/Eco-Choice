import  axios  from "axios";
const BASE_API_URL="http://localhost:9090/register" ;
class RegistrationService{
   
    addUserDetails(formData)
    {
        return axios.post(BASE_API_URL,formData);
    }

}
export default new RegistrationService() ;