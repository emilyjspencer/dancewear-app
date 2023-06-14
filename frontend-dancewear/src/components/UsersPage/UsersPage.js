import { useState, useEffect} from 'react';
import './UsersPage.css';
import Cards from '../Cards/Cards';
import UserDetailView from './UserDetailView';
import Modal from '../Modal/Modal';
import Filter from '../Filter/Filter';

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
     <Filter />
      {users.length > 0 && (
          <ul className="users-container">
          {users.map(user => (

            <>
            <div className="card-container">
              <Cards
                imgSrc="https://picsum.photos/seed/picsum/200/300"
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

          {userDetail ? <UserDetailView user={userDetail} /> : "Select a card to view more information"}
        </>
    )}

export default UsersPage;