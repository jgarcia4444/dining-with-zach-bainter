
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
        <div id="packages" className={`w-1/2 relative flex ${configureJustification()} items-center mb-4 `}>
            <img src={image} alt="" className="w-5/6 h-52 rounded" />
            <div className="p-4 absolute top-0 left-1/6 w-5/6 h-full bg-white bg-opacity-40 hover:bg-opacity-10 flex flex-col justify-end items-end transition-all">
                <h4 className="font-serif text-3xl">{title}</h4>
                <p className="text-lg font-bold">${pricePerPerson} per person</p>
            </div>
        </div>
    )
}

export default Package;