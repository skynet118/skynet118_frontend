import { Fragment } from "react";
import taskImg from "./../../assets/review-img.svg";
import classImg from "./../../assets/exercises.svg";
import teacherImg from "./../../assets/explanation-img.svg";
import computerImg from "./../../assets/summary.svg";
import backgroundImg from "./../../assets/background-benefits.svg"
import Title from "../../components/Title"
import CardSmall from "../../components/Card/CardSmall"

const Content = () => {
    return(
        <Fragment>
            <div className="mt-[80px]">
                <Title text="HOW OUR LESSONS WORK" color="#6A34FF" />
                <div className="flex justify-around mb-[100px] mt-[80px]">
                    <CardSmall  
                            text="A review of the previous lessons and homework" 
                            image={taskImg} />
                    <CardSmall 
                            text="Dive into new material, explanation of the topic, and examples" 
                            image={teacherImg} />
                    <CardSmall 
                            text="Exercises to reinforce everything we learned  during the lessons" 
                            image={computerImg} />
                    <CardSmall 
                            text="The teacher sumarizes at the end of the lesson, and prepares for the next topic" 
                            image={classImg} />
                </div>
                <div className="m-auto w-[150px] h-[50px] text-white bg-[#6A34FF] rounded cursor-pointer text-4xl">
                    <button className="block m-auto">MORE</button>
                </div>
            </div>
            <div className="min-h-[500px] mt-[100px] bg-cover bg-center bg-fixed bg-no-repeat pt-[80px] pb-[80px]" style={{'backgroundImage': "url("+ backgroundImg +")" }} >
                <Title text="WHAT ARE THE BENEFITS OF OUR SCHOOL" color="#FFFFFF" />
                <div className="mt-[80px]">
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
