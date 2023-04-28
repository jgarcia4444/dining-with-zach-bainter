import React from 'react'

import headerImage from '../../media/header/header-img.webp'

const Header = () => {

    return (
            <header id="header" className=" -z-10  w-full relative rounded lg:mb-4 sm:mb-0">
                <img src={headerImage} alt="header" className="w-full lg:rounded" />
                <div className="w-full h-full absolute top-0 left-0 bg-white bg-opacity-40 flex sm:flex-col lg:flex-row justify-center items-center flex-wrap">
                    <div className="lg:w-2/3  sm:w-full flex justify-center items-center">
                        <h1 className=" m-0 uppercase font-serif text-4xl w-5/6 lg:text-8xl  font-bold text-black  lg:w-3/4 ">Dining with Zach Bainter</h1>
                    </div>
                    <div className="lg:w-1/3 w-full sm:mt-4 flex flex-row items-center justify-center" >
                        <h3 className="lg:text-4xl text-2xl font-bold font-sans text-black w-5/6 uppercase">Your personalized dining experience </h3>
                    </div>
                </div>
            </header>
    )
}
export default Header