import Title from "../../components/Title"

const Courses = () => {
    return (
        <div className="w-full mt-[80px]">
            <Title text="COURSES" color="#6A34FF" />
            <div className="w-full mt-[80px]">
                <div className="text-white h-[80px] bg-[#6A34FF] text-6xl font-bold text-center">
                    <h1>SCRATCH</h1>
                </div>
                <div className="flex items-center w-full bg-gray-600 h-[400px] flex-col">
                    <div className="flex items-center absolute justify-between w-full">
                        <div className="relative left-[100px]">
                            <svg width="60"
                                 height="283"
                                 viewBox="0 0 85 283"
                                 fill="none">
                                <path d="M69 6.00001L18 142.5L69 277" stroke="#F8AB39" strokeWidth="33" />
                            </svg>
                        </div>
                        <div className="rotate-180 relative right-[100px]">
                            <svg width="60"
                                 height="283"
                                 viewBox="0 0 85 283"
                                 fill="none">
                                <path d="M69 6.00001L18 142.5L69 277" stroke="#F8AB39" strokeWidth="33" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-[700px] m-auto text-white">
                        <div>
                            <p>Sit nulla ipsum mollitia molestiae eaque provident. Voluptatem aliquid asperiores deserunt officiis natus? Voluptatibus expedita ex fugit sint accusantium quisquam eius? Praesentium voluptatem facilis amet vitae quidem deserunt repellat Assumenda a ad porro adipisci quisquam, libero? Vel sapiente quasi consectetur error consequuntur cum Voluptatum aspernatur nemo ab temporibus laborum Iusto</p>
                        </div>

                    </div>
                    <div className="cursor-pointer relative rounded bottom-[50px] bg-[#6A34FF] w-[150px] h-[50px] text-white text-4xl">
                        <button className="block m-auto" type="button">MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
