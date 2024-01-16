import BreadCrumb from "../components/header/breadcrumb"
import Header from "../components/layout/header"
import AllCounter from "../components/services/Allcounter"
import AllServices from "../components/services/Allservices"
import SolutionArea from "../components/services/solutionsection"
import Footer from "../components/layout/footer"
import HomeNewsLater from "../components/home/NewsLater"
import TestimonialClient from "../components/about/TestimonialClient"

const Services=()=>{
return(
<>
<header>
 <Header/>
 <BreadCrumb
  pagename="Our Services"
 />
</header>
<SolutionArea />
<AllServices />
<AllCounter/>
<TestimonialClient />
<HomeNewsLater/>
<Footer/>
</>
)
}
export default Services