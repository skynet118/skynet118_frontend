import Links from "./Links";
import SocialMedia from "./SocialMedia";
import LogoFooter from "./LogoFooter";

const Footer = () => {
    return(
        <div className="flex flex-col bg-[#3834FF] mt-[80px]">
            <div className="flex justify-between w-[100%] relative h-[300px] mt-[80px]">
                <LogoFooter />
                <Links />
                <SocialMedia />
            </div>
            <div className="text-white text-center">
                <h1 className="text-lg">Lima - Peru</h1>
                <small>@Skynet118 - All rights are reserved</small>
            </div>
        </div>
    )
}


export default Footer;
