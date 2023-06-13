import {useEffect, useState} from 'react';


const UserDetailView = ({ user }) => {
    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await fetch(`http://localhost:8080/api/users/${user.id}`);
        const json = await res.json();
        setUserDetail(json);
      })();
    }, [user]);
  
    if (!userDetail) {
      return <div>......................................................</div>;
    }
  
    return (
      <div>
        {userDetail && (
          <>
            <ul>
            <li>Name: {userDetail.first_name}</li>
            <li>Second name: {userDetail.second_name}</li>
            <li>Email: {userDetail.email}</li>
            <li>Phone: {userDetail.phone_number}</li>
            <li>Password: {userDetail.user_password}</li>
            <li>Account number: {userDetail.account_number}</li>
            <li>Favourite dance genre: {userDetail.favourite_dance_genre}</li>
            </ul>
          </>
        )}
      </div>
    );
  };


  export default UserDetailView;