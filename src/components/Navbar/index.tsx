import { Fragment, useEffect, useState} from "react"

const Navbar = () => {
    const [ isLoged, setIsLoged ] = useState(false)
    return(
        <Fragment>
            { isLoged ?
            (<div className="h-[80px] bg-[#3834FF] text-white">
                <div>
                    we are profesionals
                </div>
            </div>): 
            (<div className="h-[80px] bg-[#3834FF] text-white">
                <div>
                    we are profesionals
                </div>
            </div>)
            }
        </Fragment>
    )
}

export default Navbar;
