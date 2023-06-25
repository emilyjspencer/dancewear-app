import {useEffect, useState} from 'react';


const ProductDetailView = ({ user }) => {
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
      <div className="user-detail-container">
        {userDetail && (
          <>
            <ul className="user-detail-list">
            <li>Name: {userDetail.first_name}</li>
            <li>Second name: {userDetail.second_name}</li>
            <li>Email: {userDetail.email}</li>
            </ul>
            <button>Go Back</button>
          </>
        )}
      </div>
    );
  };


  export default ProductDetailView;