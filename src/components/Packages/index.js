
import React from 'react'

import SectionTitle from '../../shared/SectionTitle';
import Package from './Package';

import example from '../../media/packages/example.png'

const Packages = () => {

    const packages = [
        {title: 'French', pricePerPerson: "130", image: example},
        {title: 'Fine Dining', pricePerPerson: "130", image: example},
        {title: 'Mediterranean', pricePerPerson: "80", image: example},
        {title: 'Italian', pricePerPerson: "80", image: example},
        {title: 'BBQ', pricePerPerson: "80", image: example},
        {title: 'Mexican', pricePerPerson: "65", image: example},
        {title: 'Cocktail Party', pricePerPerson: "50", image: example},
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
        </div>
    )
}

export default Packages;