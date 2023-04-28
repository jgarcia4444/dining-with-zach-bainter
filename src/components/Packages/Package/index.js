
import React from 'react'

const Package = ({info}) => {
    
    const {title, pricePerPerson, image, id} = info;

    const configureJustification = () => {
        if (parseInt(id) % 2 === 0) {
            return 'justify-start';
        } else {
            return 'justify-end';
        }
    }

    return (
        <div id="packages" className={`w-full lg:w-1/2 relative flex justify-center items-center lg:mb-4 `}>
            <img src={image} alt="" className="w-full lg:w-5/6 h-56 lg:h-52 lg:rounded" />
            <div className="p-4 absolute top-0 w-full lg:left-2/6 lg:w-5/6 h-full bg-white bg-opacity-40 hover:bg-opacity-10 flex flex-col justify-end items-end transition-all">
                <h4 className="font-serif text-6xl lg:text-5xl">{title}</h4>
                <p className="lg:text-xl text-2xl ">${pricePerPerson} per person</p>
            </div>
        </div>
    )
}

export default Package;