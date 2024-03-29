import axios from "axios";
import authHeader from '../utilities/auth-headers';
import MockAdapter from 'axios-mock-adapter';
class UserService {

  getPublicContent() {
    return axios.get("http://localhost:8080");
  }

  getDanceTeacherDashboard() {
    return axios.get("http://localhost:8080/dance-teacher", {
      headers: authHeader(),
    });
  
  }

  getUserDashboard() {
    return axios.get("http://localhost:8080/user", {
      headers: authHeader(),
    });
    
  }

  getAdminDashboard() {
    return axios.get("http://localhost:8080/admin", {
      headers: authHeader(),
    });
   
  }

}

 export default new UserService;