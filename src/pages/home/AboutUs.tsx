import { Fragment } from "react"
import mapImg from "./../../assets/world.svg"
import profile from "./../../assets/nico.png"
import Title from "./../../components/Title"

const AboutUs = () =>{
    return(
        <Fragment>
            <div className="flex justify-around mt-[100px]">
                <div>
                    <Title text="ABOUT US"  color="#6A34FF"/>
                    <div className="mt-[80px]">
                        <p className="text-lg" >We're a team of young developers and designers with years of expertise</p>
                        <p className="text-lg" >we really want to share our experience and knowledge</p>
                    </div>
                </div>
                <div className="w-[300px] h-[300px] border">
                    <div className="w-[250px] h-[250px] m-auto">
                        <img className="w-[100%] h-[100%]" src={profile} alt="" />
                    </div>
                    <div className="bg-[#6A34FF] text-white text-xl text-center">
                        <h2>Nicolas Sulca - Teacher</h2>
                    </div>
                </div>
            </div>
            <div className="bg-no-repeat bg-center mt-[100px] h-[800px]" style={{ 'backgroundImage': "url("+ mapImg +")" }}>
                <Title text="OUR STUDENTS AROUND THE WORLD" color="#6A34FF" />
            </div>
        </Fragment>
    )
}


export default AboutUs;
