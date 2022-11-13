import { useState, useEffect } from "react"
import NavbarAuth from "./NavbarAuth"
import NavbarNoAuth from "./NavbarNoAuth"

const Navbar = () => {
    const [ isLoged, setIsLoged ]  = useState(false)
    return(
        <div className="bg-[#3834FF] h-[80px] flex justify-between">
            { isLoged ?
              <NavbarAuth />: <NavbarNoAuth />
            }
        </div>
    )
}

export default Navbar
