import { useState, useEffect} from 'react';
import './UsersPage.css';
import Cards from '../Cards/Cards';
import UserDetailView from '../Test/UserDetailView';
import Modal from '../Modal/Modal';

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
            <div className="card-container">
              <Cards
                imgSrc=""
                imgAlt="User placeholder"
                text1={`First name: ${user.first_name}`}
                text2={`Last name: ${user.last_name}`}
                />
                <button className="more-info-button" key={user.id} onClick={() => setUserDetail(user)}>
                  View more information about {user.first_name}</button>
                </div>
                </>
          ))}

        </ul> )}

          {userDetail ? <UserDetailView user={userDetail} /> : "hi"}
        </>
    )}

export default UsersPage;