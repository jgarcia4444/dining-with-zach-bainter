
import React, {useState} from 'react'
import SectionTitle from '../../shared/SectionTitle'

const Contact = () => {

    const [allFieldsFilled, setAllFieldsFilled] = useState(false);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [city, setCity] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [foodPackage, setFoodPackage] = useState("")
    const [packageIndex, setPackageIndex] = useState(0);
    const packages = ["French", "Fine Dining", "Mediterranean", "Italian", "BBQ", "Mexican", "Cocktail Party"];
    const [costPerson, setCostPerPerson] = useState("");
    const [comments, setComments] = useState("");  

    const renderOptions = () => {
        return packages.map((packageText, i) => <option value={i} key={`${i}-${packageText}`} >{packageText}</option>)
    }

    const handleFoodPackageSelection = e => {
        let {value} = e.target;
        setPackageIndex(parseInt(value));
        setFoodPackage(packages[value]);
    }

    return (
        <div id="contact" className="w-full bg-white rounded text-black mb-4 py-12 px-4">
            <SectionTitle text={"Contact"} />
            <div className="flex flex-row flex-wrap justify-between items-center mt-4 rounded shadow p-2 pt-4 bg-black ">
                <input onChange={e => setFName(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={fName} type="text" placeholder="First Name"/>
                <input onChange={e => setLName(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={lName} type="text" placeholder="Last Name" />
                <input onChange={e => setEmail(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={email} type="email" placeholder="Email"/>
                <input onChange={e => setPhone(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={phone} type="tel" placeholder="Phone Number"/>
                <input onChange={e => setEventDate(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={eventDate} type="date" placeholder="Event Date"/>
                <input onChange={e => setCity(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={city} type="text" placeholder='City'/>
                <input onChange={e => setNumberOfGuests(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={numberOfGuests} type="number" placeholder='# of Guests'/>
                <select className="w-2/5 rounded p-2 mb-4" onChange={handleFoodPackageSelection} placeholder='Pick a Package'>
                    <option>Pick a Package</option>
                    {renderOptions()}
                </select>
                <input onChange={e => setCostPerPerson(e.target.value)} className="w-2/5 rounded p-2 mb-4" value={costPerson} type="number" placeholder='$ per Person'/>
                <textarea placeholder='Any comments or special requests?' className="w-2/5 rounded p-2 mb-4" value={comments} onChange={(e) => setComments(e.target.value)}>{comments}</textarea>
                <div className="w-full border-2 border-white rounded-full text-white text-center py-2">
                    Send Form
                </div>
            </div>
        </div>
    )
}

export default Contact;