import { Fragment } from "react";
import taskImg from "./../../assets/review-img.svg";
import classImg from "./../../assets/exercises.svg";
import teacherImg from "./../../assets/explanation-img.svg";
import computerImg from "./../../assets/summary.svg";
import backgroundImg from "./../../assets/background-benefits.svg"

const Content = () => {
    return(
        <Fragment>
            <div>
                <div className="text-center text-6xl font-bold text-[#6A34FF]">
                    <h1>HOW OUR LESSONS WORK</h1>
                </div>
                <div className="flex justify-around mb-[100px]">
                    <div className="w-[200px]">
                        <img className="w-[80%] m-auto" src={taskImg} alt="" />
                        <p>A review of the previous lessons and homework</p>
                    </div>
                    <div className="w-[200px]">
                        <img className="w-[80%] m-auto" src={teacherImg} alt="" />
                        <p>Dive into new material, explanation of the topic, and examples</p>
                    </div>
                    <div className="w-[200px]">
                        <img className="w-[80%] m-auto" src={computerImg} alt="" />
                        <p>Exercises to reinforce everything we learned  during the lessons</p>
                    </div>
                    <div className="w-[200px]">
                        <img className="w-[80%] m-auto" src={classImg} alt="" />
                        <p>The teacher sumarizes at the end of the lesson, and prepares for the next topic</p>
                    </div>
                </div>
                <div className="m-auto w-[150px] h-[50px] text-white bg-[#6A34FF] rounded cursor-pointer text-4xl">
                    <button className="block m-auto">MORE</button>
                </div>
            </div>
            <div className="h-[500px] mt-[100px] bg-cover bg-center bg-fixed bg-no-repeat" style={{'backgroundImage': "url("+ backgroundImg +")" }} >
                <div className="text-6xl text-center text-white font-bold">
                    <h1>WHAT ARE THE BENEFITS OF OUR SCHOOL</h1>
                </div>
                <div>
                    <ul className="text-2xl text-white">
                        <li className="m-6">WE SHOW HOW TO PRODUCTIVELY SPEND TIME AT THE COMPUTER.</li>
                        <li className="m-6">PICK COURSES BASED ON YOUR CHILD'S LEVEL AND INTEREST.</li>
                        <li className="m-6">WE PROVIDE INDIVIDUAL LESSONS.</li>
                        <li className="m-6">TEACHERS WITH INDUSTRY EXPERIENCE.</li>
                        <li className="m-6">WE EXPLAIN PROGRAMMING WITH SIMPLE WORDS.</li>
                        <li className="m-6">WE ARE FLEXIBLE WITH YOUR SCHEDULE.</li>
                        <li className="m-6">WE TEACH YOUR CHILD TO PROGRAM AND DISTRACT FROM GAMES AND YOUTUBE.</li>
                    </ul>
                </div>
            </div>
        </Fragment>

    )
}

export default Content;
