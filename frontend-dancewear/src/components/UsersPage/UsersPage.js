import { useState, useEffect} from 'react';
import './UsersPage.css';

const UsersPage = () => {
const [users, setUsers] = useState([])

const fetchUserData = () => {
  fetch("http://localhost:8080/api/users")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data)
    })
}

useEffect(() => {
  fetchUserData()
}, [])

return (
  <div>
    {users.length > 0 && (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstname} {user.lastname}</li>
        ))}
      </ul>
    )}
  </div>
);
}

export default UsersPage;