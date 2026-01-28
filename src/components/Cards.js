import "../App.css"
import Laptop from "../accets/Laptop.jfif"
import Watch from "../accets/Watch.jfif"
import Mobile from "../accets/Mobile.jfif"

export default function Cards() {
    return (
        <div className="cards-container">
            <h1 className="cards-heading text-[30px] font-bold">Cards</h1>
            <div className="card-display">
            <div className="card-items">
                <div className="item-detail-container">
                    <img className="card-img" src={Laptop} alt="laptop" />
                    <h1 className="card-item-heading">Laptop</h1>
                    <p className="card-item-para">High-speed internet from virtually anywhere: 5G-enabled laptops streamline remote workflows. Employees can access high-speed internet from virtually anywhere, enabling quicker downloads, uploads, and real-time data processing and ensuring seamless collaboration and productivity regardless of location.</p>
                        <a className="link" rel="noreferrer" href="https://en.wikipedia.org/wiki/Mobile_phone" target="_blank">Read More</a>
                        <div>
                            <button className="card-item-btn">Shop Now...</button>
                      </div>
                    </div>
            </div>
            <div className="card-items">
                <div className="item-detail-container">
                        <img className="card-img watch-img" src={Watch} alt="laptop" />
                    <h1 className="card-item-heading">Watch</h1>
                    <p className="card-item-para">High-speed internet from virtually anywhere: 5G-enabled laptops streamline remote workflows. Employees can access high-speed internet from virtually anywhere, enabling quicker downloads, uploads, and real-time data processing and ensuring seamless collaboration and productivity regardless of location.</p>
                        <a className="link" rel="noreferrer" href="https://en.wikipedia.org/wiki/Mobile_phone" target="_blank">Read More</a>
                        <div>
                            <button className="card-item-btn">Shop Now...</button>
                        </div>
                    </div>
                </div>
                <div className="card-items">
                    <div className="item-detail-container">
                        <img className="card-img" src={Mobile} alt="laptop" />
                        <h1 className="card-item-heading">Mobile</h1>
                        <p className="card-item-para">High-speed internet from virtually anywhere: 5G-enabled laptops streamline remote workflows. Employees can access high-speed internet from virtually anywhere, enabling quicker downloads, uploads, and real-time data processing and ensuring seamless collaboration and productivity regardless of location.</p>
                        <a className="link" rel="noreferrer" href="https://en.wikipedia.org/wiki/Mobile_phone" target="_blank">Read More</a>
                        <div>
                            <button className="card-item-btn">Shop Now...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 