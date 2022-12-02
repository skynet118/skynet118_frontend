
export const ButtonPrimary = ({children, click, classAttr}:{children:string, click:()=>void, classAttr?:string}) => {
    return(
        <div className="text-center mt-6">
            <button className="m-auto
                        w-[150px]
                        h-[50px]
                        text-white
                        bg-[#6A34FF]
                        hover:bg-[#7c4dff]
                        rounded
                        cursor-pointer
                        text-xl"
                    onClick={click}
            >
                {children}
            </button>
        </div>
    )
}

export const ButtonSecondary = ({children, click, classAttr}:{children:string, click:()=>void, classAttr?:string}) => {
    return(
        <div className="text-center my-6">
            <button className="m-auto
                        w-[150px]
                        h-[50px]
                        text-white
                        bg-[#6A34FF]
                        hover:bg-[#7c4dff]
                        rounded
                        cursor-pointer
                        text-4xl"
                    onClick={click}
            >
                {children}
            </button>
        </div>
    )
}
