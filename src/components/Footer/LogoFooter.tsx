import Logo from "../../assets/nico.png"

const LogoFooter = () => {
    return(
        <div>
            <div className="h-[200px] w-[150px]">
                <img className="w-[100%] h-[100%]" src={Logo} alt="" />
            </div>
            <div className="text-white">
                <h1 className="text-2xl">Skynet118</h1>
                <p>The best wat to learn is teaching</p>
            </div>
        </div>
    )
}

export default LogoFooter;
