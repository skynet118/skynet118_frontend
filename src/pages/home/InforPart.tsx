import { Fragment } from "react"
import infoImg from "./../../assets/info_background.svg"

const InfoPart = () => {
    return(
        <Fragment>
            <div className="flex w-[80%] m-auto mt-8 justify-around">
                <div className="w-[350px]
                                border-4
                                
                                rounded-lg
                                border-[#6A34FF]">
                    <form className="w-[80%] m-auto h-[400px]">
                        <div className="h-[45px] rounded border-4 border-[#6A34FF] mt-8">
                            <input placeholder="Name" 
                                   className="w-full h-full border-0 pl-2 focus:outline-none"
                                   type="text" />
                        </div>
                        <div className="h-[45px] rounded border-4 border-[#6A34FF] mt-8">
                            <input placeholder="Email" 
                                   className="w-full h-full border-0 pl-2 focus:outline-none"
                                   type="email" />
                        </div>
                        <div className="h-[45px] rounded border-4 border-[#6A34FF] mt-8">
                            <input placeholder="Phone number"
                                   className="w-full h-full border-0 pl-2 focus:outline-none"
                                   type="tel" />
                        </div>
                        <div className="mt-6">
                            <input id="terms" type="checkbox" />
                            <label className="pl-2" 
                                   htmlFor="terms">I accept </label>
                            <p className="inline 
                                          text-[#FF7474] 
                                          cursor-pointer">
                                        Term and Conditions
                            </p>

                        </div>
                        <div className="text-center mt-6">
                            <button className="text-white 
                                               w-[150px]
                                               h-[50px]
                                               rounded
                                               hover:bg-[#7c4dff]
                                               bg-[#6A34FF]"
                                    type="button">
                                CONTACT US
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-[500px]">
                    <div className="text-[#6A34FF] text-6xl font-bold mb-8 mt-8">
                        <h1>INFORMATION</h1>
                    </div>
                    <div className="h-[350px]">
                        <img className="h-full" src={infoImg} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default InfoPart;
