import {useState } from "react"
import "../App.css"
import { useNavigate } from "react-router-dom"

export default function MyForm (props) {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [nameError, setNameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    
    const handleNameBlur = (event) => {
        if (event.target.value === '') {
            setNameError('*Enter your name here')
        } else {
            setNameError('')
        }
    }

    const handlePhoneBlur = (event) => {
        if (event.target.value === '') {
            setPhoneError('*Enter your Phone Number here')
        } else {
            setNameError('')
        }
    }
    
    const submitForm = (event) => {
        event.preventDefault()

        const nameRej = /^[A-Za-z]+$/
        if (!nameRej.test(name)){
             setNameError("*Please enter a valid name")
        } else {
            setNameError("")
        }

        const phoneRej = /^[6-9]\d{9}$/
        if (!phoneRej.test(PhoneNo)){
             setPhoneError("*Please enter a valid Phone number")
        } else {
            setPhoneError("")
        }

        if (name === "Keerthi" && PhoneNo === "9876543210") {
            successfulLogin()
        } 
    }

    const successfulLogin = () => {
        navigate("/successLogin")
    }

    return (
        <div className="form-container">
            <div className="form-container-2">
                <h1 className="form-heading text-[30px] font-bold">Form</h1>
                <h1 className="enter-detail-heading">Enter your details</h1>
                <form className="form-items" onSubmit={(event) => submitForm(event)}>
                    <div className="form-item-container">
                        <label className="label" htmlFor="name">Name: </label>
                        <input onBlur={(event) => handleNameBlur(event)} onChange={(event) => setName(event.target.value)} value={name} className="inputEle p-3 border-[1px] border-gray-500" type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <p className="error">{nameError}</p>
                    <div className="form-item-container">
                        <label className="label" htmlFor="email">Email: </label>
                        <input type="text" id="email" placeholder="Enter your email" className="inputEle p-3 border-[1px] border-gray-500" />
                    </div>
                    <div className="form-item-container">
                        <label className="label" htmlFor="phoneno">Phone Number: </label>
                        <input onBlur={(event) => handlePhoneBlur(event)} onChange={(event) => setPhoneNo(event.target.value)} value={PhoneNo} className="inputEle p-3 border-[1px] border-gray-500" type="text" id="phoneno" placeholder="Enter your phone number" />
                    </div>
                    <p className="error">{phoneError}</p>

                    <div className="form-item-container">
                        <p className="label">Message: </p>
                        <textarea rows="6" cols="55" className="p-3 border-[1px] border-gray-500" />
                    </div>
                    <div className="form-item-container">
                        <input type="checkbox" id="checkbox" />
                        <label className="label" id="checkbox">I agree with your condition</label>
                    </div>
                    <button type="buttton" className="submit-btn">Login</button>
                </form>
            </div>
        </div>
    )
}

