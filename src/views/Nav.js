import "../style/Nav.scss"
import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/covid">Covid</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    )
}

export default Nav