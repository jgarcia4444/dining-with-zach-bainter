
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

    return (
        <div id="contact" className="w-full bg-white rounded text-black mb-4 py-12 px-4">
            <SectionTitle text={"Contact"} />
        </div>
    )
}

export default Contact;