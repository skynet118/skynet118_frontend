const CardSmall = ({text, image}:{text:string, image:any}) => {
    return(
        <div className="w-[200px]">
            <img className="w-[80%] m-auto" src={image} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default CardSmall;
