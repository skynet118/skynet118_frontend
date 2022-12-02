export const Title = ({text, color="", classAttr}:{text: string, color?:string, classAttr?:string}) => {
    return (
        <div className={"text-6xl text-center font-bold mt-[80px] mb-[80px] " + (color !== ""? `text-[${color}] ` : "text-white ") + classAttr}>
            <h1>{text}</h1>
        </div>
    )
}

export const TitleCourse = ({text, color="", classAttr}:{text: string, color?:string, classAttr?:string}) => {
    return (
        <div className={"text-6xl text-center font-bold h-[80px] " + (color !== ""? `text-[${color}] ` : "text-white ") + classAttr}>
            <h1>{text}</h1>
        </div>
    )
}

