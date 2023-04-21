import React from 'react'
import {FiUser} from 'react-icons/fi'

const Bio = () => {

    return (
        <div className="w-full bg-white rounded flex flex-row items-center justify-center">
            <div className="w-1/3 flex justify-center">
                <FiUser color={"000"} size={108} />
            </div>
            <div className="w-2/3 flex flex-col">
                <div className="w-full">
                    <h2 className="font-bold text-black text-4xl">Zach Bainter</h2>
                </div>
                <div className="w-full"></div>
            </div>
        </div>
    )
}

export default Bio;