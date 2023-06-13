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

    <div className="">
      {users.length > 0 && (
        
          <ul className="container">
            {users.map(user => (
              <>
               
                <Cards
                  imgSrc=""
                  imgAlt="User placeholder"
                  text1={`First name: ${user.first_name}`}
                  text2={`Last name: ${user.last_name}`}
                  text3={`Email: ${user.email}`}
                  text4={`Phone number: ${user.phone_number}`}
                />
        
              </>
              
            ))}
            
          </ul>
        

      )}
    </div>
    </>)}

export default UsersPage;