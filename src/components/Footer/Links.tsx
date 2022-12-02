import Link from "../Link"
const Links = () =>{
    return(
        <div className="w-[250px]">
            <ul className="w-[180px] text-center">
                <Link link="" classAttr="w-[180px] hover:bg-[#fff] hover:text-[#3834FF]" text="Home"/>
                <Link link="" classAttr="w-[180px] hover:bg-[#fff] hover:text-[#3834FF]" text="Courses"/>
                <Link link="" classAttr="w-[180px] hover:bg-[#fff] hover:text-[#3834FF]" text="About Us"/>
                <Link link="" classAttr="w-[180px] hover:bg-[#fff] hover:text-[#3834FF]" text="Prices"/>
                <Link link="" classAttr="w-[180px] hover:bg-[#fff] hover:text-[#3834FF]" text="Q&A"/>
            </ul>
        </div>
    )
}

export default Links;
