import navclass from './Navbar.module.css'
import { NavLink, Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className={navclass.navbar}>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div>
                <NavLink to={'/category/celular'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={'/category/tablet'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={'/category/notebook'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
            </div>
        </nav>
    )
}

export default NavBar