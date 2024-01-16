import Link from "next/link"
import TestimonialClientList from "../layout/TestimonialClientList"
import Carousel from 'react-slick';

const TestimonialClient=()=>{

const SliderSetting = {
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnDotsHover: true,
    responsive: [
        {
            breakpoint: 1224,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
};

const testimonials = [
    "Incredible product! Boosted our sales and efficiency. A game-changer!",
    "CRM made a big impact. Streamlined processes and improved customer relationships.",
    "Outstanding CRM. Enhanced teamwork and customer satisfaction. Highly recommended!",
    "ERP exceeded expectations. Increased productivity and revenue. Impressive results!",
    "ERP transformed our business. Simplified tasks and fostered customer loyalty."
]
              

return(
<>
<div className="about-testimonial-area">
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>What  our <span>client</span> say</h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>Trusted by more than 40,000 customers worldwide since 2010, our ERP service is nothing short of amazing. From day one, we have made it our mission to stand out among the stars in the CRM and ERP dominions.</p>
        </div>
    </div>
</div>
<div className="row pt-50">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="inner-slide-wrap">

  <Carousel 
  {...SliderSetting}
  >  
  {
    testimonials.map((data, i) => (
        <TestimonialClientList key={i} data={data}/>
    ))
  }

  </Carousel>


</div>
</div>
</div>
</div>
</div>
</>
)
}
export default TestimonialClient