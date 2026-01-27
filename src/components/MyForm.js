import "../App.css"

export default function MyForm() {
    return (
        <div className="form-container">
            <div className="form-container-2">
                <h1 className="form-heading">Form</h1>
                <h1 className="enter-detail-heading">Enter your details</h1>
                <form className="form-items">
                    <div className="form-item-container">
                        <label className="label" htmlFor="name">Name: </label>
                        <input className="inputEle" type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-item-container">
                        <label className="label" htmlFor="email">Email: </label>
                        <input className="inputEle" type="text" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-item-container">
                        <label className="label" htmlFor="phoneno">Phone Number: </label>
                        <input className="inputEle" type="text" id="phoneno" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-item-container">
                        <p className="label">Message: </p>
                        <textarea rows="6" cols="55" />
                    </div>
                    <div className="form-item-container">
                        <input type="checkbox" id="checkbox" />
                        <label className="label" id="checkbox">I agree with your condition</label>
                    </div>
                    <button type="buttton" className="submit-btn">Submit</button>
                </form>
           </div>
        </div>
    )
}