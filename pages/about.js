import BreadCrumb from "../components/header/breadcrumb"
import AboutDetailOne from "../components/about/DetailOne"
import TestimonialClient from "../components/about/TestimonialClient"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import HomeNewsLater from "../components/home/NewsLater"
import Futured from "../components/home/futured"

const About=()=>{
return(
<>
<header>
    <Header/>
    <BreadCrumb pagename="About Us"/>
</header>
<AboutDetailOne/>
<Futured/>
<TestimonialClient/>
<HomeNewsLater/>
<Footer/>
</>
)
}
export default About