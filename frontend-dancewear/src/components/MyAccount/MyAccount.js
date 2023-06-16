import './MyAccount.css';


const MyAccount = () => {

    return (
        <>
            <h1>My Account</h1>
            <h3 className="edit">Edit your details here:</h3>

            <form className="edit-form">
                <div className="first-name">
                <label htmlFor="First Name">First Name</label>
                <input type="text" placeholder="Edit first name"></input>
                </div>
               <div className="last-name">
               <label htmlFor="Last Name">Last Name</label>
                <input type="text" placeholder="Edit last name"></input>
               </div>
               <div className="email">
               <label htmlFor="Email">Email</label>
                <input type="text" placeholder="Edit email"></input>
                </div>
             <div className="password">
             <label htmlFor="Password">Password</label>
                <input type="text" placeholder="Edit password"></input>
             </div>
             <div className="phone-number">
             <label htmlFor="Phone Number">Phone Number</label>
                <input type="text" placeholder="Edit phone number"></input>
                </div>
             <div className="home-office">
             <label htmlFor="Home office">Home Office</label>
                <input type="text" placeholder="Edit home office"></input>
                </div>
               <div className="location">
               <label htmlFor="Location">Location</label>
                <input type="text" placeholder="Edit location"></input>
                </div>
                
                <button type="submit">Edit</button>
            </form>


        </>
    )
}

export default MyAccount;