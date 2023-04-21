
import React from 'react'
import NavLinks from './NavLinks';

const Navbar = () => {

    const navLinks = [
        {text: "Bio", to: "bio"},
        {text: "Packages", to: "packages"},
        {text: "Services", to: "services"},
        {text: "Contact", to: "contact"}
    ];

    const renderNavLinks = () => {
        return navLinks.map((info, i) => <NavLinks navInfo={info} key={`${i}-${info.to}`} />)
    }

    return (
        <div className="w-full h-24 flex flex-row justify-between text-white items-center">
            <div className="w-1/4">
                <h1 className="text-2xl font-bold">Logo</h1>
            </div>
            <div className="w-2/5">
                {renderNavLinks()}
            </div>
        </div>
    )
}

export default Navbar;