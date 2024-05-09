/*Router*/
import { NavLink } from "react-router-dom";

const Nav = ({to, title}) => {

    let activeClassName = "blockwheels-nav-active";

    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
            >
                {title}
            </NavLink>
        </li>
    );
}

export default Nav;