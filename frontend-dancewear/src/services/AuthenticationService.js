
 import axios from "axios";

 
 class AuthenticationService {
   login(data) {
     return axios
       .post("http://localhost:8080/auth/login", data, { timeout: 100000 })
       .then((response) => {
         console.log(response.data);
         if (response.data.jwt) {
           console.log("i am the jwt for this user", response.data.jwt);
           localStorage.setItem("user", JSON.stringify(response.data));
         }
         return response.data;
       });
   }
 
   logout() {
     localStorage.removeItem("user");
     console.log("removing user from the local storage")
   }
 
   getCurrentUser = () => {
     return JSON.parse(localStorage.getItem("user"));
   };
 
   register(data, roleAuthority) {
     return axios.post(
       `http://localhost:8080/auth/register/${roleAuthority}`,
       data
     );
   }
 
   
 }
 
 export default new AuthenticationService();