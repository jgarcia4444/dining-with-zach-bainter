
import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com';
import {FiLoader} from 'react-icons/fi';

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
    const [sendingForm, setSendingForm] = useState(false);
    const [formReceived, setFormReceived] = useState(false);

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
    };

    const handleSend = () => {
        if (allFieldsFilled === true) {
            setSendingForm(true);
            let formInfo = {
                first_name: fName,
                last_name: lName,
                email: email,
                phone: phone,
                date: eventDate,
                number_of_guests: numberOfGuests,
                package: foodPackage,
                cost_per_person: costPerson,
                comments: comments,
                city: city,
            }
            setTimeout(() => {
                emailjs.send(
                    "service_7gym0nn",
                    "template_psuh1hm",
                    formInfo,
                    "axxiNbR8vVPyjY2_4",
                )
                    .then(res => {
                        if (res.status === 200) {
                            setFormReceived(true);
                        }
                        setSendingForm(false);
                    })
            }, 1000)
        } 
    }

    const sendFormDisplay = () => {
        if (sendingForm === true) {
            return <FiLoader color={"#ccc"} size={24} className="animate-spin"/>
        } else {
            return "Send Form"
        }
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
        <div id="contact" className="w-full bg-white lg:rounded text-black lg:mb-4 py-12 px-4">
            <SectionTitle text={"Contact"} />
            {formReceived === true ? 
                <div className="flex flex-col items-start justify-center text-white mt-4 rounded shadow p-2 pt-4 bg-gray-300 relative">
                    <h3 className="text-2xl font-bold font-sans">Thank you for the inquiry!</h3>
                    <p className="text-md font-sans">We will review the information recieved as soon as possible and return the needed information to you as fast as possible.</p>
                </div>
            :
                <div className="flex flex-row flex-wrap justify-between items-start mt-4 rounded shadow p-2 pt-4 bg-gray-300 relative">
                    {renderInputs()}
                    <div onClick={handleSend} className={`w-full border-2 border-white rounded text-white text-center py-2 transition-all ${allFieldsFilled === true ? "border-0 shadow bg-white text-gray-300 cursor-pointer flex items-center justify-center" : " cursor-not-allowed"}`}>
                        {sendFormDisplay()}
                    </div>
                </div>
            }
        </div>
    )
}

export default Contact;