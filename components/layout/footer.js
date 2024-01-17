import Link from "next/link"
import FooterConstant from "../../constant/FooterConstant/FooterConstant"

const Footer=()=>{
return(
<div className="footer-area hrrd-footer-area positioning pb-100">
<div className="container">
<div className="row">
<div className="col-xl-12 col-lg-12 col-sm-12 col-12">
<div className="footer-wrap">
<div className="row justify-content-between">
    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="single-widget">
            <div className="footer-logo">
            <Link href="/">
            <h1>Elite<span className="logoColor">T</span>eQ</h1>
            </Link>
                <p>{FooterConstant.subTitle}</p>
                <div className="footer-social wow animate flipInX" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <ul>
                        <li><Link href={FooterConstant.GoogleLink}><a><i className="bi bi-facebook"></i></a></Link></li>
                        <li><Link href={FooterConstant.LinkedinLink}><a><i className="bi bi-linkedin"></i></a></Link></li>
                        <li><Link href={FooterConstant.TwitterLink}><a><i className="bi bi-twitter"></i></a></Link></li>
                        <li><Link href={FooterConstant.InstagramLink}><a><i className="bi bi-instagram"></i></a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
        <div className="single-widget">
            <div className="footer-title">
                <h3>Other Services</h3>
            </div>
            <div className="footer-link">
                <ul>
                    <li><Link href="/"><a>Web Development</a></Link></li>
                    <li><Link href="/"><a>ERP</a></Link></li>
                    <li><Link href="/"><a>Mobile Development</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
        <div className="single-widget">
            <div className="footer-title">
                <h3>Links</h3>
            </div>
            <div className="footer-link">
                <ul>
                    <li><Link href="/"><a>About</a></Link></li>
                    <li><Link href="/"><a>Terms</a></Link></li>
                    <li><Link href="/"><a>Privacy Policy</a></Link></li>
                    <li><Link href="/"><a>Careers</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="single-widget">
            <div className="footer-title">
                <h3>Job Info</h3>
            </div>
            <div className="footer-link">
                <ul>
                    <li><Link href="/"><a>Select</a></Link></li>
                    <li><Link href="/"><a>Services</a></Link></li>
                    <li><Link href="/"><a>Payment</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6"> 
        <div className="single-widget">
            <div className="footer-title">
                <h3>Contact</h3>
            </div>
            <div className="contact-info">
                <ul>
                    <li>Email : <span>{FooterConstant.email}</span></li>
                    {/* <li>Address : <span>{FooterConstant.address[0]}</span></li> */}
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="copy-right-area">
<p className="copy-text">{FooterConstant.copyrightText}</p>
</div>
</div>
</div>
</div>
<img className="shape hrrd-footer-shape" src="/assets/images/shape/hrrd-footer.png" alt=""/>
</div>
)
}
export default Footer