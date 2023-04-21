
import React, {useState} from 'react'

const NavLinks = ({navInfo}) => {

    const [isHovering, setIsHovering] = useState(false);

    const {to, text} = navInfo;

    return (
        <a onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={`font-bol transition-all mr-12 hover:text-gray-300 ${isHovering === true ? "animate-pulse " : ""}`} href={`#${to}`}>{text}</a>
    )
};

export default NavLinks;