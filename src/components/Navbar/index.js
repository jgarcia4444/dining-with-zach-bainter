
import React from 'react'
import NavLink from './NavLink';

import logo from '../../media/logo/logo.png'

const Navbar = () => {

    const navLinks = [
        {text: "Bio", to: "bio"},
        {text: "Packages", to: "packages"},
        {text: "Services", to: "services"},
        {text: "Contact", to: "contact"}
    ];

    const renderNavLinks = () => {
        return navLinks.map((info, i) => <NavLink navInfo={info} key={`${i}-${info.to}`} />)
    }

    return (
        <div className="w-full flex flex-row justify-between text-black items-center bg-white rounded mb-4
        p-2">
            <div className="w-1/4">
                <div className="w-4/5">
                    <a href="#header" className=''>
                        <img className="" src={logo} alt="logo" />
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