import './App.css'
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className="menubar">
            <Link to="/Dashboard">
                <button className="menuItems"><p> Home</p></button>
            </Link>
            <Link to="/accountset">
                <button className="menuItems"><p> Account Settings</p></button>
            </Link>
            <Link to="/loanapp">
                <button className="menuItems"><p> Loan Application</p></button>
            </Link>
        </div>
    );
}

export default Menu;