
import React, {useState} from 'react'

const NavLink = ({navInfo}) => {

    const [isHovering, setIsHovering] = useState(false);

    const {to, text} = navInfo;

    return (
        <a onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={`font-bold transition-all mr-12 hover:text-gray-700 ${isHovering === true ? "animate-pulse " : ""}`} href={`#${to}`}>{text}</a>
    )
};

export default NavLink;