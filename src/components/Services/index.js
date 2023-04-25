import React from 'react'

import SectionTitle from '../../shared/SectionTitle';
import Service from './Service';

const Services = () => {

    const renderServices = () => {
        let services = [
            {text: "", icon: ""},
            {text: "", icon: ""},
            {text: "", icon: ""},
            {text: "", icon: ""},
        ]
        return services.map((serviceInfo, i) => <Service info={serviceInfo} key={`${i}-${serviceInfo.text}`} />)
    }

    return (
        <div id="services" className="w-full bg-white rounded text-black mb-4 py-12 px-4">
            <SectionTitle text={"Services"} />
            <div className="">
                <h4 className="">Guest Limit</h4>
                <p className="">25</p>
            </div>
            <div className="">
                {renderServices()}
            </div>
        </div>
    )
}

export default Services;