import "./Member.css"
import { Link } from "react-router-dom"
import IMG1 from "../assets/Img1.jpg"
import IMG2 from "../assets/Img2.jpg"
import IMG3 from "../assets/Img3.jpg"
import IMG4 from "../assets/Img4.jpg"
import IMG5 from "../assets/Img5.jpg"




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
    </div>
    </div>
  )
}

export default Member