
import React, {useState, useEffect} from 'react'
import SectionTitle from '../../shared/SectionTitle'
import InputComponent from './InputComponent';

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

    const handleFoodPackageSelection = e => {
        let {value} = e.target;
        setPackageIndex(parseInt(value));
        setFoodPackage(packages[value]);
    }

    let inputs = [
        {value: fName, changeFunction: e => setFName(e.target.value), label: "First Name", type: "user"},
        {value: lName, changeFunction: e => setLName(e.target.value), label: "Last Name", type: "user"},
        {value: email, changeFunction: e => setEmail(e.target.value), label: "Email", type: "email"},
        {value: phone, changeFunction: e => setPhone(e.target.value), label: "Phone Number", type: "phone"},
        {value: eventDate, changeFunction: e => setEventDate(e.target.value), label: "Event Date", type: "date"},
        {value: city, changeFunction: e => setCity(e.target.value), label: "Event City", type: "location"},
        {value: numberOfGuests, changeFunction: e => setNumberOfGuests(e.target.value), label: "Number of Guests", type: "number"},
        {value: foodPackage, changeFunction: handleFoodPackageSelection, label: "Pick a Package", type: "package"},
        {value: costPerson, changeFunction: e => setCostPerPerson(e.target.value), label: "Cost per Person", type: "budget"},
        {value: comments, changeFunction: e => setComments(e.target.value), label: "Comments", type: "textarea"}
    ]

    const renderInputs = () => {
        return inputs.map((inputInfo, i) => <InputComponent inputInfo={inputInfo} key={`${i}-${inputInfo.label}`} />)
    }

    useEffect(() => {
        let checkedValues = [fName, lName, email, phone, eventDate, city, numberOfGuests, foodPackage, costPerson];
        if (checkedValues.every(val => val !== "")) {
            setAllFieldsFilled(true);
        } else {
            setAllFieldsFilled(false);
        }
    }, [fName, lName, email, phone, eventDate, city, numberOfGuests, foodPackage, costPerson])

    return (
        <div id="contact" className="w-full bg-white rounded text-black mb-4 py-12 px-4">
            <SectionTitle text={"Contact"} />
            <div className="flex flex-row flex-wrap justify-between items-start mt-4 rounded shadow p-2 pt-4 bg-gray-300 relative">
                {renderInputs()}
                <div className="w-full border-2 border-white rounded text-white text-center py-2">
                    Send Form
                </div>
            </div>
        </div>
    )
}

export default Contact;