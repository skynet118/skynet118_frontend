import Logo from "../../assets/nico.png"

const LogoFooter = () => {
    return(
        <div className="ml-[80px] w-[250px]">
            <div className="h-[200px] w-[150px] m-auto">
                <img className="w-[100%] h-[100%]" src={Logo} alt="" />
            </div>
            <div className="text-white text-center">
                <h1 className="text-2xl">Skynet118</h1>
                <p>The best way to learn is teaching</p>
            </div>
        </div>
    )
}

export default LogoFooter;
