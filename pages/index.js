import HBottom from "../components/header/hbottom";
import HomeDetailOne from "../components/home/DetailOne";
import HomeDetailTwo from "../components/home/DetailTwo";
import Futured from "../components/home/futured";
import Header from "../components/layout/header";
import HomeNewsLater from "../components/home/NewsLater";
import Footer from "../components/layout/footer"
import AllServices from "../components/services/Allservices";
import TestimonialClient from "../components/about/TestimonialClient";
import AllCounter from "../components/services/Allcounter";

export default function Home() {
return (
<>
<header>
  <Header/>
  <HBottom/>
</header>
<AllServices />
<Futured/>
<HomeDetailOne/>
<HomeDetailTwo/>
<AllCounter/>
<TestimonialClient />
<HomeNewsLater/>
<Footer/>
</>
)
}

