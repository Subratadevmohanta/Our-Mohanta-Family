import "./Member.css"
import { Link } from "react-router-dom"
import IMG1 from "../assets/Img1.jpg"
import IMG2 from "../assets/Img2.jpg"
import IMG3 from "../assets/Img3.jpg"
import IMG4 from "../assets/Img4.jpg"
import IMG5 from "../assets/Img5.jpg"
import IMG6 from "../assets/Img6.jpg"
import IMG7 from "../assets/Img7.jpg"
import IMG8 from "../assets/Img8.jpg"
import IMG9 from "../assets/Img9.jpg"
import IMG10 from "../assets/Img10.jpg"
import IMG11 from "../assets/Img11.jpg"



import React from 'react'

const Member = () => {
  return (
    <div className="body">
        <div className="container1">
        <div className="mycard">
            <div className="cimg">
                <img src={IMG1} alt="IMG1"/>
            </div>
            <div className="cdetail">
                <h2>Rekha Mohanta.</h2> 
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG2} alt="IMG2"/>
            </div>
            <div className="cdetail">
                <h2>Jogodish Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG3} alt="IMG3"/>
            </div>
            <div className="cdetail">
                <h2>Radharani Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG4} alt="IMG4"/>
            </div>
            <div className="cdetail">
                <h2>Kalironjon Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG5} alt="IMG5"/>
            </div>
            <div className="cdetail">
                <h2>Kolpona Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG6} alt="IMG6"/>
            </div>
            <div className="cdetail">
                <h2>Nipendro Nath Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG7} alt="IMG6"/>
            </div>
            <div className="cdetail">
                <h2>Purnima Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG8} alt="IMG6"/>
            </div>
            <div className="cdetail">
                <h2>Dr. Bijoy Chandra Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG9} alt="IMG6"/>
            </div>
            <div className="cdetail">
                <h2>Parboti Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG10} alt="IMG6"/>
            </div>
            <div className="cdetail">
                <h2>Subhas Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
        <div className="mycard">
            <div className="cimg">
                <img src={IMG11} alt="IMG6"/>
            </div>
            <div className="cdetail">
                <h2>Puja Mohanta.</h2>
                <br/>
                <br/>
                <Link to="" className="btn">WebSite</Link>
                <Link to="" className="btn btn-light">FaceBook</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Member