
const Comments = () => {
    return(
        <div className="flex flex-col">
            <div className="text-center text-6xl text-[#6A34FF] font-bold">
                <h1>REVIEWS FROM PARENTS AND STUDENTS</h1>
            </div>
            <div className="flex items-center absolute justify-between w-full">
                <div className="relative left-[100px]">
                    <svg width="35"
                         height="283"
                         viewBox="0 0 85 283"
                         fill="none">
                        <path d="M69 6.00001L18 142.5L69 277" stroke="#81A618" strokeWidth="33" />
                    </svg>
                </div>
                <div className="rotate-180 relative right-[100px]">
                    <svg width="35"
                         height="283"
                         viewBox="0 0 85 283"
                         fill="none">
                        <path d="M69 6.00001L18 142.5L69 277" stroke="#81A618" strokeWidth="33" />
                    </svg>
                </div>
            </div>
            <div className="w-full flex justify-around">
                <div className="rounded w-[350px] h-[200px] bg-[#FFDA16]">
                    <h3>Mom's Name</h3>
                </div>
                <div className="rounded w-[350px] h-[200px] bg-[#FFDA16]">
                    <h3>Son's Name</h3>
                </div>
            </div>
        </div>
    )
}

export default Comments;
