import "../../Style/Layout/Nav.css";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <>
            <nav>
                <div>
                    <ul>
                        <li><NavLink to="/"className={({isActive})=>isActive?"activo":undefined }>Homes</NavLink></li>
                        <li><NavLink to="/Conoceme"className={({isActive})=>isActive?"activo":undefined }>Conoceme</NavLink></li>
                        <li><NavLink to="/Contacto"className={({isActive})=>isActive?"activo":undefined }>Contacto</NavLink></li>
                        <li><NavLink to="/Galeria"className={({isActive})=>isActive?"activo":undefined }>Galeria</NavLink></li>
                        <li><NavLink to="/Novedades"className={ ({isActive})=>isActive?"activo":undefined}>Novedades</NavLink></li>
                        <li><NavLink to="/Servicios"className={({isActive})=>isActive?"activo":undefined }>Servicios</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Nav;