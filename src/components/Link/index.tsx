import { Fragment } from "react";

const Link = ({image, link, text, classAttr}:{image?: any, link:string, text?:string, classAttr?:string}) => {
    return(
        <Fragment>
            <li className={"w-[40px] h-[40px] flex text-white items-center list-none m-[10px] " + classAttr}>
                <a className="w-[100%] h-[100%]" href={link} ><img src={image} />{text}</a>
            </li>
        </Fragment>
    )
}

export default Link;
