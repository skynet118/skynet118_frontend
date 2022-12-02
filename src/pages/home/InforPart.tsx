import { Fragment } from "react"
import infoImg from "./../../assets/info_background.svg"
import { ButtonPrimary } from "../../components/Button"
import { InputText } from "../../components/Input"
import Title from "../../components/Title"

const InfoPart = () => {
    
    const submit = () => {
        console.log("clicking")
    }
    
    const test = () => console.log("input")

    return(
        <Fragment>
            <div className="flex w-[80%] m-auto mt-8 justify-around">
                <div className="w-[350px]
                                border-4
                                rounded-lg
                                border-[#6A34FF] flex h-[500px]">
                    <form className="w-[80%] m-auto">
                        <InputText 
                                    idInput="nameId" 
                                    name="nameId"
                                    message="test"
                                    label="Name"
                                    placeholder="my name"
                                    type="text"
                                    onChange={test}
                        />
                        <InputText 
                                    idInput="emailId" 
                                    name="emailId"
                                    message="test"
                                    label="Email"
                                    placeholder="example@mail.com"
                                    type="email"
                                    onChange={test}
                        />
                        <InputText 
                                    idInput="phoneId" 
                                    name="phoneId"
                                    message="test"
                                    label="Phone Number"
                                    placeholder="987 654 321"
                                    type="tel"
                                    onChange={test}
                        />
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
                        <ButtonPrimary click={submit} >
                                CONTACT US
                        </ButtonPrimary>
                    </form>
                </div>
                <div className="w-[500px]">
                    <Title text="INFORMATION" color="#6A34FF" />
                    <div className="h-[350px]">
                        <img className="h-full" src={infoImg} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default InfoPart;
