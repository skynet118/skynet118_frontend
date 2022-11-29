import Links from "./Links";
import SocialMedia from "./SocialMedia";
import LogoFooter from "./LogoFooter";

const Footer = () => {
    return(
        <div className="w-[100%] bg-[#3834FF] relative h-[300px] mt-[80px]">
            <Links />
            <SocialMedia />
            <LogoFooter />
        </div>
    )
}


export default Footer;
