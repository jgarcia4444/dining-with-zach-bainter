import React from 'react'

const Service = ({info}) => {

    const {text, image} = info;

    return (
        <div className="w-1/4 flex flex-col items-center">
            <div className="w-3/4 border-2 rounded-full flex justify-center items-center shadow transition-all cursor-pointer hover:shadow-none">
                <img className="w-full p-6" src={image} />
            </div>
            <div className="w-3/4 mt-4 text-2xl">
                <p className="text-center">{text}</p>
            </div>
        </div>
    )
}

export default Service;