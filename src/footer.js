import { FaFacebookF, FaTwitter,FaYoutube,FaAtlassian} from "react-icons/fa";
import {Link} from 'react-router-dom'
const Footer = () => {
    return ( 
        <div className="footer">
            <h1>برای دریافت بهترین پیشنهاد های مسافرت ایمیل خود را وارد کند</h1>
            <h3> هر زمان که خواستید میتوانید ثبت نام  را لغو کنید</h3>
            <form>
                <input type="email" name="email" placeholder="ایمیل را وارد کنید" required/>
                <button type="submit">ثبت نام</button>
            </form>
            <div className="links">
                <div className="about">
                    <h3>درباره ما</h3>
                    <Link to="/"> چگونه کار میکند</Link>
                    <Link to="/"> تصدیق نامه ها</Link>
                    <Link to="/"> کارها</Link>
                    <Link to="/"> سرمایه گذاران</Link>
                </div>
                <div className="contact">
                <h3>  ارتباط با ما  </h3>
                    <Link to="/">  تماس با ما</Link>
                    <Link to="/">حمایت</Link>
                    <Link to="/"> مقصد ها</Link>
                    <Link to="/"> اسپانسر</Link>
                </div>
                <div className="social-media">
                <h3>شبکه اجتماعی</h3>
                    <Link to="/"> اینستا</Link>
                    <Link to="/">فیسبوک</Link>
                    <Link to="/">  یوتیوب</Link>
                    <Link to="/"> توییتر</Link>
                </div>
            </div>
            <div className="bottom">
                <FaAtlassian className="logo1" />
                <p className="copy">&copy; مسافران</p>
                <div className="media-logo">
                    <FaFacebookF className="facebook"/>
                    <FaTwitter className="twitter" />
                    <FaYoutube className="youtube" />

                </div>
            </div>
        </div>
     );
}
 
export default Footer;