import React from 'react'

import headerImage from '../../media/header/header-img.webp'

const Header = () => {

    return (
            <header className="w-full relative">
                <img src={headerImage} alt="header" className="w-full " />
                <div className="w-full h-full absolute top-0 left-0 bg-white bg-opacity-40 flex flex-row justify-evenly items-center">
                    <div className="w-3/5 flex justify-center items-center">
                        <h1 className=" uppercase font-serif text-8xl font-bold text-black mx-auto w-3/4">Dining with Zach Bainter</h1>
                    </div>
                    <div className="w-2/5">
                        <h3 className="text-4xl font-bold font-sans text-black w-5/6 mx-auto">Your personalized dining experience </h3>
                    </div>
                </div>
            </header>
    )
}
export default Header