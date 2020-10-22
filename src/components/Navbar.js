import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => (false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
        
                <Link to="/" className="navbar-logo">
                    Robin <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='menu-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/content' className='nav-links' onClick={closeMobileMenu}>
                            Content
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
