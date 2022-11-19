import { Fragment } from "react"
import  logoImg from "../../assets/nico.png"

const particlesBanner = () => {
    return (
        <Fragment>
            <div className="
                            items-center
                            h-[350px] 
                            bg-[#FFAB2E] 
                            p-[50px] 
                            flex 
                            justify-around">
                <div className="">
                    <h2 className="text-white text-4xl m-[5px]">LET'S BUILD THE FUTURE OF OUR KIDS TOGETHER!</h2>
                    <h2 className="text-white text-4xl m-[5px]">ONE CODE AT ONCE</h2>
                </div>
                <div className="h-[50%]">
                    <img className="h-full m-auto" src={logoImg} alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default particlesBanner;
