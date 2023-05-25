import { useState, useEffect} from 'react';
import axios from 'axios';

const UsersPage = () => {

    const [users, setUsers] = useState([]);

  useEffect(() => {

    const headers = {
        "Content-Type": "application/json"
      };

    axios.get('http://localhost:8080/api/users', { headers})
      .then(result => {
        console.log(result)
        const newUsers = result.data.response.results
        
         console.log(newUsers[0])
           setUsers(newUsers);
         });
        }, []);
      
      
  return (
    <div className="App">
   <h1>Users</h1>
      <ul>
        {users.map(user=> (
        <li key={user.id}>
          <strong>{user.firstname}</strong>
          <br />
          <br />
          <strong>{user.lastname}</strong>
          
        </li>
        ))}
        </ul>
      </div>
     );
    }

export default UsersPage;