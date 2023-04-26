
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
            <input value={fName} type="text" placeholder="First Name"/>
            <input value={lName} type="text" placeholder="Last Name" />
            <input value={email} type="email" placeholder="Email"/>
            <input value={phone} type="tel" placeholder="Phone Number"/>
            <input value={eventDate} type="date" placeholder="Event Date"/>
            <input value={city} type="text" placeholder='City'/>
            <input value={numberOfGuests} type="number" placeholder='# of Guests'/>
            <select onChange={handleFoodPackageSelection} placeholder='Pick a Package'>
                <option>Pick a Package</option>
                {renderOptions()}
            </select>
            <input value={costPerson} type="number" placeholder='$ per Person'/>
            <textarea value={comments} onChange={(e) => setComments(e.target.value)}>{comments}</textarea>
        </div>
    )
}

export default Contact;