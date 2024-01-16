import HOMEHEADER from "../../constant/HeaderConstant/HomeHeader"
import Link from "next/link"

const HBottom=()=>{
return(
<>
<div className="hrrd-hero positioning d-lg-block d-none d-sm-none">
<div className="container">
<div className="row align-items-center justify-content-between">
<div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
<div className="hrrd-hero-content">
    <h1>{HOMEHEADER.HomeTitle}</h1>
</div>

<div className="text-btn">
    <p>Discover the versatility of our comprehensive ERP and CRM solutions, tailored for businesses of all sizes. Our all-encompassing ERP solution and expertly crafted Customer Relationship Manager (CRM) software are designed to streamline your business operations, foster enduring customer relationships, and empower you to make informed, data-driven decisions.</p>
</div>

<div className="hrrd-hero-btn-wrap">
    <Link href="/contact"><a className="common-btn btn-hrrd-1">{HOMEHEADER.ActionBtnText}</a></Link>
</div>

</div>
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
<div className="hrrd-hero-img-wrap">
<div className="hrrd-hero-img">
    <img src={HOMEHEADER.ConverImage} alt=""/>
        <div className="hrrd-hero-post">
            <h4>Leads</h4>
            <div className="hrrd-hero-post-shape">
                <img src="assets/images/shape/hrrd-hero-post.png" alt=""/>
                <Link href="/"><a><i className="bi bi-download"></i></a></Link>
            </div>
            <ul>
                <li><span></span><Link href="/"><a>Qualified</a></Link></li>
                <li><span></span><Link href="/"><a>Declined</a></Link></li>
            </ul>
        </div>
        <div className="like-cart hero-like-cart">
            <div className="like-cart-box">
                <div className="like-cart-icon">
                    <i className="bx bxs-like"></i>
                </div>
                <div className="like-cart-content">
                    <h4>398K</h4>
                    <h6>Total Likes</h6>
                </div>
            </div>
        </div>
</div>
</div>
</div>
</div>
</div>
<img className="shape hrrd-hero-shape" src="assets/images/shape/hrrd-hero-shape.png" alt=""/>
<img className="shape hrrd-hero-shape-top" src="assets/images/shape/hrrd-hero-shape-top.png" alt=""/>
</div>

<div className="hrrd-hero positioning d-lg-none d-block d-sm-block">
<div className="container">
<div className="row align-items-center justify-content-between">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrrd-hero-img-wrap-mobile">
        <div className="hrrd-hero-img">
    <img src={HOMEHEADER.ConverImage} alt=""/>
</div>
    </div>
    </div>
    <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
        <div className="hrrd-hero-content">
        <h1>{HOMEHEADER.HomeTitle}</h1>
        </div>
        <div className="text-btn">
    <p>This all-in-one Custom CRM solution is suitable for businesses of any size. Our expertly crafted Customer Relationship Manager(CRM) software will help you streamline your business operations, build lasting customer relationships, and make data-driven decisions.</p>
</div>

<div className="hrrd-hero-btn-wrap">
    <Link href="/contact"><a className="common-btn btn-hrrd-1">{HOMEHEADER.ActionBtnText}</a></Link>
</div>
    </div>
</div>
</div>
<img className="shape hrrd-hero-shape" src="/assets/images/shape/hrrd-hero-shape.png" alt=""/>
</div>
</>
)
}
export default HBottom