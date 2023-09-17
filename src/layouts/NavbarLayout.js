import {NavLink} from "react-router-dom";

import css from './NavbarLayout.css'


const NavbarLayout =() =>{

    return(
        <div className='navbar'>
            <div>BingeWatch</div>
            <NavLink to={{ pathname: '/movies', search: '?page=1' }}>Movies</NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
        </div>
    )
}

export {NavbarLayout}
