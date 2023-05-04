
import React, {useState} from 'react'

const NavLink = ({navInfo, isMobile}) => {

    const [isHovering, setIsHovering] = useState(false);

    const {to, text} = navInfo;

    return (
        <a onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={`font-bold transition-all  ${isMobile === true ? "mr-0" : "mr-12 hover:text-gray-700"}   uppercase ${isHovering === true ? "animate-pulse " : ""}`} href={`#${to}`}>{text}</a>
    )
};

export default NavLink;