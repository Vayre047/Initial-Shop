import { Link } from 'react-router-dom';

function LogOut(){
    return(
        <div>
            <Link id='isLogOut' to="/login">LogOut</Link>
        </div>
    )
}

export default LogOut;