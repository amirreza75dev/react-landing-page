import { Link } from "react-router-dom"
import { FaAtlassian } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";


const Navbar = () => {

    const [toggleMenu,setToggleMenu] =useState(false)
    return (  
        <div className="navbar">
            <div className="navabr-container">
                <div><Link to="/"><FaAtlassian className="logo1" /></Link></div>
                <ul className={toggleMenu? "links show-links" : "links"}>
                    <li><Link to ="/">خانه</Link></li>
                    <li><Link to ="/services">محصولات</Link></li>
                    <li><Link to ="/products">سرویس ها</Link></li>
                    {toggleMenu && <li><Link to ="/"> <button className="ul-btn">وارد شوید</button></Link></li>}

                </ul>
                <div className="sign-btn"><button>وارد شوید</button></div>

                <div className="hamber" onClick={()=>setToggleMenu(!toggleMenu)}>
                    {!toggleMenu ? <BiMenu className="hamber-menu" /> : <FaRegWindowClose className="logo1"/>}
                    
                </div>

            </div>

        </div>
    );
}
 
export default Navbar;