import { Fragment, useState, useEffect } from "react"
import logoImg from "../../assets/nico.png"
import whatsappImg from "../../assets/whatsapp.svg"

const NavbarNoAuth = () => {
    const textPhrases:string[] = [
        "WE ARE PROFESIONALS",
        "WE ARE TEACHERS",
        "WE ARE DEVELOPERS",
        "LET'S GET IN TOUCH"
    ]

    return(
        <Fragment>
        <div className="w-[80px] h-[80px]">
            <img className="h-full" src={logoImg} alt="" />
        </div>
        <div className="text-white relative top-[30px] w-[300px] m-auto left-[150px]">
            { textPhrases.map((phrase, index) =>(
                <p key={index} >{phrase}</p>
            ))}
        </div>
        <a className="flex items-center w-[150px]" href="#">
        <div className="text-white flex items-center h-full">
            <p>Whatsapp</p>
            <img className="ml-2 h-[50%]" src={whatsappImg} alt="" />
        </div>
        </a>
        <div className="relative border-l-2 text-white w-[80px] h-[80px] flex items-center">
            <select name="" className="bg-[#3834FF] m-auto cursor-pointer">
                <option value="ES">ES</option>
                <option value="EN">EN</option>
            </select>
        </div>
        </Fragment>
    )
}

export default NavbarNoAuth;
