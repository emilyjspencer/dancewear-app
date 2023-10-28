import axios from "axios";
import authHeader from '../utilities/auth-headers';

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

  getAdminDashboardBoard() {
    return axios.get("http://localhost:8080/admin", {
      headers: authHeader(),
    });
   
  }

}

export default new UserService();