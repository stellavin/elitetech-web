import React, { useState } from 'react';
import Link from "next/link"
import HomeDetailOne from "../../../constant/home/DetailOne"

const DetailRight=()=>{
    const [isParagraphVisible1, setIsParagraphVisible1] = useState(false);
    const [isParagraphVisible2, setIsParagraphVisible2] = useState(false);
    const [isParagraphVisible3, setIsParagraphVisible3] = useState(false);
    const [isParagraphVisible4, setIsParagraphVisible4] = useState(false);
    const [isParagraphVisible5, setIsParagraphVisible5] = useState(false);
    const [isParagraphVisible6, setIsParagraphVisible6] = useState(false);

    const toggleParagraphVisibility = (number) => {
        if (number === 1) setIsParagraphVisible1(!isParagraphVisible1);
        if (number === 2) setIsParagraphVisible2(!isParagraphVisible2);
        if (number === 3) setIsParagraphVisible3(!isParagraphVisible3);
        if (number === 4) setIsParagraphVisible4(!isParagraphVisible4);
        if (number === 5) setIsParagraphVisible5(!isParagraphVisible5);
        if (number === 6) setIsParagraphVisible6(!isParagraphVisible6);
    };



return(
<>
<div className="col-xxl-5 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50">
    <div className="hrdd-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1 dangerouslySetInnerHTML={{__html: HomeDetailOne.Title}}></h1>
    </div>
    <div className="everything-info">
        <ul>
            <li onClick={ () => toggleParagraphVisibility(1)} className="wow animate fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">{HomeDetailOne.Feature1}
            <span>
            {isParagraphVisible1 ? (
              <i className="bi bi-arrow-down"></i>
            ) : (
              <i className="bi bi-arrow-right"></i>
            )}</span>
            </li>
            {isParagraphVisible1 && (
            <p>
            Get all the tools to control your business accounting and inventory in one place. Use convenient dashboards to set financial goals, invoice clients, manage taxation, and see where your money is going.
            </p>
            )}
            <li onClick={ () => toggleParagraphVisibility(2)} className="wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">{HomeDetailOne.Feature2} <span>
            {isParagraphVisible1 ? (
              <i className="bi bi-arrow-down"></i>
            ) : (
              <i className="bi bi-arrow-right"></i>
            )}</span></li>
            {isParagraphVisible2 && (
            <p>
            Gain easy access to the personal details of your staff. Edit staff information, assign roles, and gain control over access. Handle all facets of your HR from attendance records to salary payments - all without lifting a finger.
            </p>
            )}
            <li onClick={ () => toggleParagraphVisibility(3)} className="wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">{HomeDetailOne.Feature3} <span>
            {isParagraphVisible1 ? (
              <i className="bi bi-arrow-down"></i>
            ) : (
              <i className="bi bi-arrow-right"></i>
            )}</span></li>
            {isParagraphVisible3 && (
            <p>
            Easily keep in touch with clients and users. Streamline the contract process for a more efficient business. Generate new estimates quickly and easily. Crush deadlines by managing estimates - all in one place, in a matter of minutes.
            </p>
            )}
            <li onClick={ () => toggleParagraphVisibility(4)} className="wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">{HomeDetailOne.Feature4} <span>
            {isParagraphVisible1 ? (
              <i className="bi bi-arrow-down"></i>
            ) : (
              <i className="bi bi-arrow-right"></i>
            )}</span></li>
            {isParagraphVisible4 && (
            <p>
            Land new clients in a flash, and get paid just as fast. Create proposal templates and pitch your future clients. Turn your accepted proposals into payable invoices, send reminders, and get paid fast - all in one place!
            </p>
            )}
            <li onClick={ () => toggleParagraphVisibility(5)} className="wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">{HomeDetailOne.Feature5} <span>
            {isParagraphVisible1 ? (
              <i className="bi bi-arrow-down"></i>
            ) : (
              <i className="bi bi-arrow-right"></i>
            )}</span></li>
            {isParagraphVisible5 && (
            <p>
            Manage all buying and selling activities with one tool. From managing all your products and tracking inventory to managing your branches - POS has everything you need to simplify your organization`s day-to-day tasks.
            </p>
            )}
            <li onClick={ () => toggleParagraphVisibility(6)} className="wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">{HomeDetailOne.Feature6} <span>
            {isParagraphVisible1 ? (
              <i className="bi bi-arrow-down"></i>
            ) : (
              <i className="bi bi-arrow-right"></i>
            )}</span></li>
            {isParagraphVisible6 && (
            <p>
            Protecting your data is our top priority. Our CRM platform is built with robust security measures to keep your information safe and confidential.
            </p>
            )}
        </ul>
    </div>
    
    <div className="hrrd-collaborate-btn-wrap wow animate fadeInUp" data-wow-delay="45ms" data-wow-duration="1500ms">
    <Link href="/contact"><a className="common-btn btn-hrrd-1">{HomeDetailOne.ActionBtn}</a></Link>
</div>
</div>
</>
)
}
export default DetailRight