import ServiceItem from "./serviceitem"

const AllServices=()=>{
return(
<>
<div className="all-services-area pt-100 pb-76">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>Our <span>services</span></h1>
        </div>
    </div>
</div>
<div className="row mt-50">

 <ServiceItem
  Icon="bi bi-file-code-fill"
  title="CRM Solutions"
  desc="We offer Customer Relationship Management (CRM) solutions that empower businesses to manage customer interactions effectively. Our CRM systems enable you to organize customer data, automate sales and marketing, and improve customer support, all in one unified platform"
  actionBtn=""
 />

<ServiceItem
  Icon="bi bi-intersect"
  title="Web Development Services"
  desc="We specialize in web development services, creating and maintaining websites and web applications. Our expertise covers the entire spectrum of web development, from designing user interfaces to coding and optimizing web projects, ensuring your online presence is top-notch."
  actionBtn=""
 />

<ServiceItem
  Icon="bi bi-graph-up"
  title="ERP Systems"
  desc="We provide Enterprise Resource Planning (ERP) systems that seamlessly integrate various business functions and processes within your organization. Our ERP solutions optimize key activities such as finance, human resources, inventory management, and production, enhancing your efficiency and decision-making through a centralized platform."
  actionBtn=""
 />

<ServiceItem
  Icon="bi bi-journal-text"
  title="Mobile development"
  desc="We specialize in mobile development, and we are experts in creating applications tailored for mobile devices. We design and code software that runs seamlessly on various platforms, utilizing the unique features of smartphones and tablets to deliver innovative and user-friendly applications. We cover a wide range of mobile apps, from games to productivity tools and social media applications, making us your trusted partner in the mobile development landscape"
  actionBtn=""
 />

<ServiceItem
  Icon="bi bi-file-earmark-richtext"
  title="Custom Software Solutions"
  desc="We specialize in custom software development, where we work closely with clients to create bespoke solutions. We design and build software that precisely matches your business needs, optimizing your processes, and giving you a competitive advantage."
  actionBtn=""
 />

<ServiceItem
  Icon="bi bi-brush-fill"
  title="UI/UX Design"
  desc="We craft user-centric digital interfaces that prioritize exceptional user experiences, blending user research, information architecture, wireframes, and interactive prototypes to create visually appealing designs. Our iterative approach and collaboration ensure designs that engage and satisfy users while aligning with your business goals."
  actionBtn=""
 />

</div>
</div>
</div>
</>
)
}
export default AllServices