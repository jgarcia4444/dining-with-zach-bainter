
import React from 'react'

import SectionTitle from '../../shared/SectionTitle';
import Package from './Package';

import example from '../../media/packages/example.png'
import packagesImages from '../../config/packagesImages';

const Packages = () => {

    const {bbq, cocktailParty, fineDining, french, italian, mediterranean, mexican} = packagesImages;

    const packages = [
        {title: 'French', pricePerPerson: "130", image: french, id: 0},
        {title: 'Fine Dining', pricePerPerson: "130", image: fineDining, id: 1},
        {title: 'Mediterranean', pricePerPerson: "80", image: mediterranean, id: 2},
        {title: 'Italian', pricePerPerson: "80", image: italian, id: 3},
        {title: 'BBQ', pricePerPerson: "80", image: bbq, id: 4},
        {title: 'Mexican', pricePerPerson: "65", image: mexican, id: 5},
        {title: 'Cocktail Party', pricePerPerson: "50", image: cocktailParty, id: 6},
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
            <div className="w-full">
                <div className="bg-gray-300 p-4 w-full rounded shadow relative">
                    <p className="  text-3xl font-serif mb-2">Details</p>
                    <ul className='bg-white rounded p-2 shadow-inner w-1/2'>
                        <li className="">Customized menus also available</li>
                        <li className="">All menus can be modified or substituted.</li>
                        <li className="">Menu changes may be subject to an additional expense</li>
                        <li className="">Dietary restrictions can be accommodated</li>
                    </ul>
                    <div className="absolute top-2 right-2 w-1/4 h-1/2 transition-all bg-white shadow-inner rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default Packages;