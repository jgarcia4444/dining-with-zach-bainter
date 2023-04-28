import React from 'react'

const Service = ({info}) => {

    const {text, image} = info;

    return (
        <div className="lg:w-1/4 w-full flex flex-col items-center mb-6 lgmb-0">
            <div className="w-3/4 border-2 rounded-full flex justify-center items-center shadow-lg transition-all cursor-pointer hover:shadow-none p-24">
                <img className="w-full " src={image} />
            </div>
            <div className="w-3/4 lg:mt-4 text-3xl">
                <p className="text-center">{text}</p>
            </div>
        </div>
    )
}

export default Service;