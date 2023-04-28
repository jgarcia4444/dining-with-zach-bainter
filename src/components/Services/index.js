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
        <div id="services" className="w-full bg-white lg:rounded text-black lg:mb-4 py-12 px-4">
            <SectionTitle text={"Services"} />
            <div className="flex flex-row flex-wrap relative">
                <div className={`transition-all  bg-gray-100 mb-4 rounded shadow p-2 mr-2 hover:bg-opacity-0 hover:shadow-lg`}>
                    <h4 className="font-bold text-xl font-serif">Guest Limit</h4>
                    <p className="text-lg font-sans">25</p>
                </div>
                <div className={`transition-all  bg-gray-100 mb-4 rounded shadow p-2 mr-2 hover:bg-opacity-0 hover:shadow-lg`}>
                    <h4 className="font-bold text-xl font-serif">Location</h4>
                    <p className="text-lg font-sans">Guest's Residence</p>
                </div>
            </div>
            <div className="w-full flex flex-row flex-wrap">
                {renderServices()}
            </div>
        </div>
    )
}

export default Services;