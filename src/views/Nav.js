import "../style/Nav.scss"
import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/covid">Covid</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/markdown">Markdown</NavLink>
            <NavLink to="/chart">Chart</NavLink>
            <NavLink to="/infinity">Infinity</NavLink>
        </div>
    )
}

export default Nav