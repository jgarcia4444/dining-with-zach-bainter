import React from 'react'

const WhiteOpaqueContainer = ({children}) => {

    return (
        <div className="bg-white bg-opacity-80 rounded p-2">
            {children}
        </div>
    )
}

export default WhiteOpaqueContainer;    