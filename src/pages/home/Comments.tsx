import Title from "../../components/Title";

const Comments = () => {
    return(
        <div className="flex flex-col">
            <Title text="REVIEWS FROM PARENTS AND STUDENTS" color="#6A34FF" />
            <div className="flex items-center">
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
                    <div className="rounded-lg p-[20px] w-[350px] h-[200px] bg-[#FFDA16]">
                        <h3>Mom's Name</h3>
                    </div>
                    <div className="rounded-lg p-[20px] w-[350px] h-[200px] bg-[#FFDA16]">
                        <h3>Son's Name</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;
