import "../App.css"
import product from "../accets/product.webp"


export default function Home() {
    return (
        <div className="home-bg-container">
            <h1 className='heading text-[30px] font-bold'>HOME PAGE</h1>
            <ul className='taps'>
                <li className='overview listStyle'>Over view</li>
                <li className="listStyle">Gallery</li>
                <li className="listStyle">Connet to data</li>
                <li className='listStyle'>Service</li>
                <li className="listStyle">Explore</li>
                <li className="listStyle">About</li>
            </ul>

            
            <div className='desc-container'>
                <img src={product} className='image' alt="productsImage" />
                <div>
                    <h1 className='card-heading text-[25px] font-bold'>Didital Products</h1>
                    <div className="home-desc-container">
                    <p className='desc'>Digital products are intangible items delivered electronically, like eBooks, music, software, online courses, templates, and digital art, offering instant access for users and eliminating physical inventory for sellers, with examples ranging from apps and printables to AI tools and virtual game items. They provide value through information, entertainment, or utility, accessible via download or online platforms</p>
                    </div>
                    <div className="home-btn-container">
                        <button className='button'>Read More..</button>
                    </div>
                </div>
            </div>
        </div>
    )
}