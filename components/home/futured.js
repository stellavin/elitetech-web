import FutureItem from "./futured/item"

const Futured=()=>{
return(
<>
<div className="featured-area positioning  pb-76">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>Spend <span>less time</span> on adminstartive tasks, and <span>more time</span> on what you are good at,<span>EliteTech ERP</span> an all-in one business system.</h1>
        </div>
    </div>
</div>
<div className="row justify-content-center mt-50">

  <FutureItem
   AnimeDelay="400ms"
   icon="/assets/images/icon/featured-icon-1.png"
   title="Accounting"
   desc="The account is an account management software."
  />

<FutureItem
   AnimeDelay="500ms"
   icon="/assets/images/icon/featured-icon-4.png"
   title="HRM"
   desc="Your employees are your business’s greatest assets."
  />

  <FutureItem
   AnimeDelay="600ms"
   icon="/assets/images/icon/featured-icon-2.png"
   title="Projects"
   desc="A project can assign its task and bug to its team."
  />

 <FutureItem
   AnimeDelay="700ms"
   icon="/assets/images/icon/featured-icon-3.png"
   title="CRM"
   desc=""
  />

  <FutureItem
   AnimeDelay="800ms"
   icon="/assets/images/icon/featured-icon-5.png"
   title="POS"
   desc="Spend less time managing your sales and purchases growing your business."
  />
  

</div>
</div>
<img className="shape featured-shape" src="assets/images/shape/feasured-hrrd.png" alt=""/>
</div>
</>
)
}
export default Futured