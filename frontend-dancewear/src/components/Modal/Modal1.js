
import './Modal1.css';
import { useEffect, useState } from 'react';

const Modal1 = ({ user }) => {


    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:8080/api/users/${user.id}`);
            const json = await res.json();
            setUserDetail(json);
        })();
    }, [user]);

    return (
        <>
            <div className="modal-container">
                <h1>Modal component</h1>
                <ul className="modal-container">
                    <div className="user-detail-container">
                        {userDetail && (
                            <>
                                <ul className="user-detail-list">
                                    <ul className="user-detail-list">
                                        <li>Name: {userDetail.first_name}</li>
                                        <li>Second name: {userDetail.second_name}</li>
                                        <li>Email: {userDetail.email}</li>
                                        <li>Phone: {userDetail.phone_number}</li>
                                        <li>Password: {userDetail.user_password}</li>
                                        <li>Account number: {userDetail.account_number}</li>
                                        <li>Favourite dance genre: {userDetail.favourite_dance_genre}</li>
                                    </ul>
                                    <button>Go Back</button>
                                </ul>
                                <button>Go Back</button>
                            </>
                        )}
                    </div>


                </ul>
            </div>
        </>
    )


}

export default Modal1;