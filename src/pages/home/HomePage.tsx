import { Fragment } from "react"
import Navbar from "./../../components/Navbar"
import Particles from "./../../components/Particles"
import Footer from "./../../components/Footer"
import InfoPart from "./InforPart"
import Courses from "./Courses"
import Content from "./Content"
import AboutUs from "./AboutUs"
import Comments from "./Comments"

function HomePage(){
    return(
        <Fragment>
            <Navbar />
            <Particles />
            <InfoPart />
            <Courses />
            <Content />
            <AboutUs />
            <Comments />
            <Footer />
        </Fragment>
    )
}

export default HomePage;
