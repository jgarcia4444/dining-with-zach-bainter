import React from 'react'

const Service = ({info}) => {

    const {text, icon} = info;

    return (
        <div className="">
            <div className="">
                {icon}
            </div>
            <div className="">
                <p className="">{text}</p>
            </div>
        </div>
    )
}

export default Service;