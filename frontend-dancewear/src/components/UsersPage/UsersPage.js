import { useState, useEffect} from 'react';
import './UsersPage.css';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import Modal from 'react-modal';


const modalStyles = {
  content: {
    backgroundColor: "white",
    border: "solid 4 gray",
    width: 600,
    height: 600,
    color: "black",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
   
  },
};

const UsersPage = () => {
const [users, setUsers] = useState([])
const [userDetail, setUserDetail] = useState(null);
console.log(users)

const [modalOpen, setModalOpen] = useState(false);


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
            <button id="card-modal-button" key={user.id} onClick={(e) => { setUserDetail(user);
               setModalOpen(e)  }}>View more information about {user.first_name}</button>
              <Cards
                imgSrc="https://picsum.photos/seed/picsum/200/300"
                imgAlt="User placeholder"
                text1={`First name: ${user.first_name}`}
                text2={`Last name: ${user.last_name}`}
                />
            
       
                </div>
                </>
          ))}

        </ul> )}

       
      {userDetail ? <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
        user={userDetail}
        
      >
        <ul className="user-detail-list">
            <li><strong>Name: </strong> {userDetail.first_name} {userDetail.second_name}</li>
            <li><strong>Email: </strong>{userDetail.email}</li>
            <li><strong>Phone: </strong>{userDetail.phone_number}</li>
            <li><strong>Password: </strong>{userDetail.user_password}</li>
            <li><strong>Account number: </strong>{userDetail.account_number}</li>
            <li><strong>Favourite dance genre: </strong>{userDetail.favourite_dance_genre}</li>
            </ul>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal> : "select a card to view more info" }
       
        </>
    )}

export default UsersPage;