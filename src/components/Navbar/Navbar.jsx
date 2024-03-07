import CartWidget from "../CartWidget/CartWidget"
import './Style.css'
import Logo from "./Images/IPS-logo.png"
import {NavLink, Link } from "react-router-dom"
const Navbar = () => {
    return (
       <nav className="main-nav">
        <Link to='/'>
            <img src={Logo} alt=""  className="logo-image"/>
        </Link>
        <div className="nav-links-container">
          <NavLink to={`/category/Asistencia`} className={({isActive}) => isActive ? 'Activeoption' : 'Option'}>Asistencia</NavLink>
          <NavLink to={`/category/Recreativos`} className={({isActive}) => isActive ? 'Activeoption' : 'Option'}>Recreativos</NavLink>
          <NavLink to={`/category/Salud fisica`} className={({isActive}) => isActive ? 'Activeoption' : 'Option'}>Salud fisica</NavLink>
        </div>
        <CartWidget></CartWidget>
       </nav>
    )

    
}

export default Navbar