import FaceBookLogo from "../../assets/links/facebook.svg"
import InstagramLogo from "../../assets/links/instagram.svg"
import WhatsappLogo from "../../assets/links/whatsapp.svg"
import GitHubLogo from "../../assets/links/github.svg"
import YouTubeLogo from "../../assets/links/youtube.svg"
import TwitterLogo from "../../assets/links/twitter.svg"
import Link from "../Link"


const SocialMedia = () => {
    return(
        <div className="mr-[80px]">
            <h1 className="text-white text-xl">Follow Us here</h1>
            <ul className="flex flex-wrap w-[120px]">
                <Link classAttr="mt-[20px]" image={FaceBookLogo} link="https://facebook.com/skynet118school" />
                <Link classAttr="mt-[20px]" image={InstagramLogo} link="https://www.instagram.com/skynet.118" />
                <Link classAttr="mt-[20px]" image={WhatsappLogo} link="https://wa.me/51986178410" />
                <Link classAttr="mt-[20px]" image={GitHubLogo} link="https://github.com/skynet118" />
                <Link classAttr="mt-[20px]" image={YouTubeLogo} link="https://www.youtube.com/@skynet1189" />
                <Link classAttr="mt-[20px]" image={TwitterLogo} link="https://twitter.com/nickolas126" />
            </ul>
        </div>
    )
}

export default SocialMedia;
