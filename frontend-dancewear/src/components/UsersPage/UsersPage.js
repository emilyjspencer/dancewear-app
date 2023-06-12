import { useState, useEffect} from 'react';
import './UsersPage.css';
import Cards from '../Cards/Cards';

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
  <>

    <div className="users-list">
      {users.length > 0 && (
        
          <ul>
            {users.map(user => (
              <>
                <li key={user.id}>
                </li>
                <Cards
                  imgSrc=""
                  imgAlt="User placeholder"
                  text1={`First name: ${user.first_name}`}
                  text2={`Last name: ${user.last_name}`}
                  text3={`Job location: ${user.email}`}
                  text4={`Contract duration: ${user.phone_number}`}
                />
              
              </>
            ))}
          </ul>
        

      )}
    </div>
    </>)}

export default UsersPage;