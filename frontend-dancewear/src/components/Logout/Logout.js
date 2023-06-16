import './Logout.css';
import {useNavigate} from "react-router-dom"

const Logout = () => {

    const navigate = useNavigate();



    return (
    <div className="logout-form">
        <button onClick={()=>navigate("/")}>Logout</button>
    </div>
    )
}

export default Logout;