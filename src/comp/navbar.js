import { GiWorld } from "react-icons/gi";
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className="navbar">
      <div className="name">
        <GiWorld className="logo"/>
        <h3>DouikTravel</h3>
      </div>
      <div className="nav2">
      <div className="pages"><Link to="/">Home</Link></div>
      <div className="pages"><Link to="/contact">Contact</Link></div>
      <div className="pages"><Link to="/destination">Destination</Link> </div>
      </div>
    </div>
  );
}

export default NavBar;
