
import React, {useState, useEffect} from 'react';
import NavLink from './NavLink';

import logo from '../../media/logo/logo.png'

const Navbar = () => {

    const [showFixedNav, setShowFixedNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        {text: "Bio", to: "bio"},
        {text: "Packages", to: "packages"},
        {text: "Services", to: "services"},
        {text: "Contact", to: "contact"}
    ];

    const renderNavLinks = () => {
        return navLinks.map((info, i) => <NavLink navInfo={info} key={`${i}-${info.to}`} />)
    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > 20) {
            setShowFixedNav(true); 
          } else if (window.scrollY < 21) { 
            setShowFixedNav(false);  
          }
          setLastScrollY(window.scrollY); 
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    },[lastScrollY])

    return (
        <div className={`w-full flex flex-row justify-between text-black items-center transition-all bg-white rounded mb-4 p-2 ${showFixedNav === true ? "sticky top-0 left-0 w-full z-50 shadow rounded-t-none" : ""}`}>
            <div className="w-1/4">
                <div className="w-4/5">
                    <a href="#header" className=''>
                        <img className={`${showFixedNav === true ? "w-3/4" : ""} transition-all`} src={logo} alt="logo" />
                    </a>
                </div>
            </div>
            <div className="w-2/5">
                {renderNavLinks()}
            </div>
        </div>
    )
}

export default Navbar;