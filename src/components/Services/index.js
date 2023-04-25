import React from 'react'

import SectionTitle from '../../shared/SectionTitle';
import Service from './Service';

import servicesImages from '../../config/sevicesImages';

const Services = () => {

    const {chef, waiter, bartender, catering} = servicesImages

    const renderServices = () => {
        let services = [
            {text: "Chefs", image: chef},
            {text: "Servers", image: waiter},
            {text: "Bartenders", image: bartender},
            {text: "Dropoff Catering", image: catering},
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
            <div className="w-full flex flex-row flex-wrap">
                {renderServices()}
            </div>
        </div>
    )
}

export default Services;