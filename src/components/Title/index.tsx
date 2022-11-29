const Title = ({text, color}:{text: string, color:string}) => {
    return (
        <div className={"text-6xl text-center font-bold mt-[80px] mb-[80px] " + `text-[${color}]`}>
            <h1>{text}</h1>
        </div>
    )
}

export default Title;
