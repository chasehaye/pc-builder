import { Link } from 'react-router-dom';
import './NavBar.css';
import * as userService from '../../utilities/users-service';

export default function NavBar({setUser, user}){
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
    return(
        <nav>
        <Link class='nav-link' to='/pcs'>PC List</Link>
        &nbsp; | &nbsp;
        <Link class='nav-link' to='/'>Home</Link>
        &nbsp; | &nbsp;
        <Link class='nav-link' to='/pcs/new'>Add a Custom PC</Link>
        &nbsp;| &nbsp;
        <span>{user.name}</span>
        &nbsp;| &nbsp;
        <Link class='nav-link' to='' onClick={handleLogOut}>Log Out</Link>
      </nav>
    );
    
}