
import React, {useState, useEffect} from 'react';
import {FiMenu} from 'react-icons/fi';

import NavLink from './NavLink';

import logo from '../../media/logo/logo.png'

const Navbar = () => {

    const [showFixedNav, setShowFixedNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMobileNavLinks, setShowMobileNavLinks] = useState(false);

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

    const renderNavLinksButton = () => {
        return (
            <div onClick={() => setShowMobileNavLinks(!showMobileNavLinks)} className="rounded hover:shadow-xl transition-all  p-2 border-2 border-white cursor-pointer ">
                <FiMenu className="" color={'#000'} size={32} />
            </div>
        )
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    },[lastScrollY])

    return (
        <div className={`w-full flex flex-row justify-between text-black items-center transition-all bg-white lg:rounded lg:mb-4 sm:mb-0 p-2 ${showFixedNav === true ? "sticky top-0 left-0 w-full z-50 shadow rounded-t-none" : ""}`}>
            <div className="w-1/4">
                <div className="w-4/5">
                    <a href="#header" className=''>
                        <img className={`${showFixedNav === true ? "w-3/4" : ""} transition-all`} src={logo} alt="logo" />
                    </a>
                </div>
            </div>

            <div className="w-2/5 hidden lg:block">
                {renderNavLinks()}
            </div>
            <div className="w-2/5 flex items-center justify-center lg:hidden relative">
                {renderNavLinksButton()}
                <div className="w-5/6 absolute top-6 left-0">
                    {}
                </div>
            </div>
        </div>
    )
}

export default Navbar;