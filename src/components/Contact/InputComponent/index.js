import React from 'react';
import {FiUser, FiLock, FiMail, FiPhone, FiPackage, FiDollarSign, FiCalendar, FiGlobe, FiUsers} from 'react-icons/fi';

const InputComponent = ({inputInfo}) => {
    const {label, value, changeFunction, type} = inputInfo;
    const packages = ["French", "Fine Dining", "Mediterranean", "Italian", "BBQ", "Mexican", "Cocktail Party"];

    const userInput = () => {
        let input;
        if (type === "textarea") {
            input = (
                <textarea placeholder='Any comments or special requests?' className="w-full rounded p-2 mb-4" value={value} onChange={changeFunction}>{value}</textarea>
            )
        } else if (type === "package") {
            input = (
                <select className="w-full rounded p-2 mb-4" onChange={changeFunction} placeholder={label}>
                    <option>{label}</option>
                    {renderOptions()}
                </select>
            )
        } else {
            input = (
                <input onChange={changeFunction} className="w-full rounded p-2" value={value} type={configureType()} placeholder={label} />
            )
        } 
        return input;
    }

    const configureIcon = () => {
        let size = 24;
        let color = "#ccc"
        switch(type) {
            case "user":
                return <FiUser color={color} size={size} />;
            case "pass":
                return <FiLock color={color} size={size} />;
            case 'email':
                return <FiMail color={color} size={size} />;
            case 'phone':
                return <FiPhone color={color} size={size}/>
            case 'package':
                return <FiPackage color={color} size={size}/>
            case 'budget':
                return <FiDollarSign color={color} size={size}/>;
            case 'date':
                return <FiCalendar color={color} size={size}/>;
            case 'location':
                return <FiGlobe color={color} size={size}/>;
            case 'number':
                return <FiUsers color={color} size={size}/>
            default:
                return <FiUser color={color} size={size} />;
        }
    }

    const configureType = () => {
        switch(type) {
            case "user":
                return "text";
            case "email":
                return "email";
            case "phone": 
                return "tel";
            case "date":
                return "date";
            case 'number':
                return 'number'
            case 'budget':
                return 'number';
            default:
                return "text"
        }
    }

    const renderOptions = () => {
        return packages.map((packageText, i) => <option value={i} key={`${i}-${packageText}`} >{packageText}</option>)
    }

    return (
        <div className={`${type === "textarea" ? "w-full" : "w-1/2"} p-4 flex flex-col justify-center items-center transition-all`}>
            { value !== "" &&
                (<div className={`w-full bg-white rounded-b-none  z-50 rounded ${value !== "" ? "pb-2" : ""}`}>
                    <label className="text-gray-300 pl-2 " >{value === "" ? "" : label}</label>
                </div>)
            }
            <div className={`w-full flex flex-row items-center justify-center px-2 rounded  bg-white ${value !== "" ? "rounded-t-none" : ""}`}>
                <div className="flex items-start justify-center">
                    {configureIcon()}
                </div>
                <div className="w-full">
                    {userInput()}
                </div>
            </div>
        </div>
    )
}

export default InputComponent;