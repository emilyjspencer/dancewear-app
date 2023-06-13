import { useState, useEffect} from 'react';
import './UsersPage.css';
import Cards from '../Cards/Cards';
import UserDetailView from '../Test/UserDetailView';

const UsersPage = () => {
const [users, setUsers] = useState([])
const [userDetail, setUserDetail] = useState(null);
console.log(users)

useEffect(() => {
  (async () => {
    const res = await fetch("http://localhost:8080/api/users");
    const json = await res.json();
    setUsers(json);
  })();
}, []);

return (
  <>

      {users.length > 0 && (
          <ul className="container">
          {users.map(user => (

            <>
              <Cards
                imgSrc=""
                imgAlt="User placeholder"
                text1={`First name: ${user.first_name}`}
                text2={`Last name: ${user.last_name}`}
                />
                <li key={user.id} onClick={() => setUserDetail(user)}>{user.first_name}</li></>

          ))}

        </ul> )}

          {userDetail ? <UserDetailView user={userDetail} /> : "hi"}

        </>
    )}

export default UsersPage;