import http from "./http-requests";



const create = data => { 
  return http.post("/auth/register", data);
};





const RegisterService = {
 
  create
  
};

export default RegisterService;