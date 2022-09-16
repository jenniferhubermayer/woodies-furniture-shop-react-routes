import "./Nav.css"
import { NavLink } from "react-router-dom";
import Logo from "../img/Logo.png"

const Nav = () => {
    return ( 
        <nav>
            <NavLink to="/"><img src={Logo} alt="" /></NavLink>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about"
                        style={({ isActive }) => {return {color: isActive ? "#DAA520" : "",};}} >About us</NavLink>
                </li>
                <li>
                    <NavLink to="products" 
                        style={({ isActive }) => {return {color: isActive ? "#DAA520" : "",};}} >Products</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;