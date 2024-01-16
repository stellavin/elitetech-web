import BreadCrumb from "../components/header/breadcrumb"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"

const Contact=()=>{
return(
<>
<header>
    <Header />
    <BreadCrumb pagename="Contact" />
</header>

<div className="contact-area">
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
    <form id="contact-form" action="mail.php" method="POST" className="contact-input">
        <div className="contact-title">
            <h1>Send Us A Message</h1>
        </div>
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                <input type="text" name="name" placeholder="Enter your name"/>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                <input type="email" name="email" placeholder="Enter your email address"/>
            </div>
            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <textarea name="message" id="message" cols="30" rows="4" placeholder="Write your message..."></textarea>
            </div>
            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <label className="shop-check">Save my name, email, and website in this browser for the next time.
                <input type="checkbox"/>
                <span className="checkmark"></span>
                </label>
            </div>
            <div className="contact-btn-wrap">
                <button type="submit" className="common-btn btn-hrrd-1">Send Message</button>
            </div>
            <p className="form-message"></p>
        </div>
    </form>
    </div>
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
        <div className="cart-wrap">
            <div className="single-cart">
                <div className="cart-title">
                    <h2>Contact Information</h2>
                </div>
                <div className="contact-details">
                    <div className="contact-details-title">
                <h3>Contact Info</h3>
                </div>
                <div className="contact-details-info">
                <ul>
                    <li><i className="bi bi-envelope"></i> <a href="mailto:Support@saasland.com">info@elitetechexperts.com</a></li>
                </ul>
                </div>
                </div>
                <div className="contact-details">
                    <div className="contact-details-title">
                <h3>Office Address</h3>
                </div>
                <div className="contact-details-info">
                <ul>
                    <li><i className="bi bi-geo-alt-fill"></i> 100 Banbridge Road, London, United Kingdom</li>
                </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<Footer/>
</>
)
}
export default Contact