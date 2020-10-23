import React, {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => (false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);


    window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
        
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
                {button && <Button buttonStyle='btn--outline'>TEST</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
