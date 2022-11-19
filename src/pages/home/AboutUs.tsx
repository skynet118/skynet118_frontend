import { Fragment } from "react"
import mapImg from "./../../assets/world.svg"

const AboutUs = () =>{
    return(
        <Fragment>
            <div className="flex justify-around mt-[100px]">
                <div>
                    <div className="m-auto text-6xl text-[#6A34FF] font-bold">
                        <h1>ABOUT US</h1>
                    </div>
                    <p className="text-lg" >We're a team of young developers and designers with years of expertise</p>
                    <p className="text-lg" >we really want to share our experience and knowledge</p>
                </div>
                <div>
                    <div>
                        <img src={""} alt="" />
                    </div>
                    <div>
                        <p>Nicolas Sulca - Teacher</p>
                    </div>
                </div>
            </div>
            <div className="bg-no-repeat bg-center mt-[100px] h-[800px]" style={{ 'backgroundImage': "url("+ mapImg +")" }}>
                <div className="text-center text-6xl text-[#6A34FF] font-bold">
                    <h1>OUR STUDENTS AROUND THE WORLD</h1>
                </div>
            </div>
        </Fragment>
    )
}


export default AboutUs;
