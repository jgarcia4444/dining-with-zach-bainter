
import React from 'react'

import SectionTitle from '../../shared/SectionTitle';
import Package from './Package';

import example from '../../media/packages/example.png'
import packagesImages from '../../config/packagesImages';

const Packages = () => {

    const {bbq, cocktailParty, fineDining, french, italian, mediterranean, mexican} = packagesImages;

    const packages = [
        {title: 'French', pricePerPerson: "130", image: french},
        {title: 'Fine Dining', pricePerPerson: "130", image: fineDining},
        {title: 'Mediterranean', pricePerPerson: "80", image: mediterranean},
        {title: 'Italian', pricePerPerson: "80", image: italian},
        {title: 'BBQ', pricePerPerson: "80", image: bbq},
        {title: 'Mexican', pricePerPerson: "65", image: mexican},
        {title: 'Cocktail Party', pricePerPerson: "50", image: cocktailParty},
    ]

    const renderPackages = () => {
        return packages.map((packageInfo, i) => <Package info={packageInfo} key={`${i}-${packageInfo.title}`} />)
    }

    return (
        <div className="w-full bg-white rounded text-black mb-4 py-12 px-4">
            <SectionTitle text="Packages" />
            <div className="w-full flex flex-row flex-wrap mt-4">
                {renderPackages()}
            </div>
            <div className="w-full pl-10">
                <p className=" font-bold text-xl">Details</p>
                <ul className=' list-disc'>
                    <li className="">Customized menus also available</li>
                    <li className="">All menus can be modified or substituted.</li>
                    <li className="">Menu changes may be subject to an additional expense</li>
                    <li className="">Dietary restrictions can be accommodated</li>
                </ul>
            </div>
        </div>
    )
}

export default Packages;