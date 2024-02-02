import React, { useState } from 'react'
import Markdown from 'markdown-to-jsx';

const lessonPlanTableStyle = `
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #87ceeb;
    }
    tr {
        background-color: white;
    }
`;

const LessonPlan = ({ generatedLessonPlan }) => {
    const [currentQuizQuestionIndex, setCurrentQuizQuestionIndex] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});

    const handleQuizAnswer = (questionIndex, option) => {
        setQuizAnswers({...quizAnswers, [questionIndex]: option});
        if (currentQuizQuestionIndex < generatedLessonPlan?.mcqs?.length - 1) {
            setCurrentQuizQuestionIndex(currentQuizQuestionIndex + 1)
        }
    }

    return (
        <>
            {Object.keys(generatedLessonPlan).length > 0 && (
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col justify-center items-start w-full text-center'>
                        <h1 className="text-white text-3xl w-full bg-black py-3">
                            <span className='font-bold capitalize'>In depth lecture</span>
                        </h1>
                        <div className='prose bg-gray-200 px-2 py-4 italic w-full sm:text-center text-left'>{generatedLessonPlan?.in_depth_lecture}</div>
                    </div>
                    <div className='flex flex-col justify-center items-start w-full text-center'>
                        <h1 className="text-white text-3xl w-full bg-black py-3">
                            <span className='font-bold capitalize'>Outline for study simply</span>
                        </h1>
                        <div className="whitespace-pre-wrap prose text-left bg-gray-200 px-2 py-4 w-full">{generatedLessonPlan?.outlines}</div>
                    </div>
                    <div className='flex flex-col justify-center items-start w-full text-center'>
                        <h1 className="text-white text-3xl w-full bg-black py-3">
                            <span className='font-bold capitalize'>Interactive Quiz</span>
                        </h1>
                        {generatedLessonPlan?.mcqs?.length > 0 && generatedLessonPlan?.mcqs.map((mcq, index) => (
                            <div key={index} className="w-full flex flex-col justify-center items-start space-y-4 bg-gray-200 p-6 shadow mb-2">
                                <h3 className="text-lg font-bold capitalize">
                                    Question {index + 1}:
                                </h3>
                                <div className="text-gray-700 text-md">{mcq.question}</div>
                                <h3 className="text-lg font-bold capitalize">
                                    Options:
                                </h3>
                                <form className="w-full">
                                    {mcq?.options?.map((option, optionIndex) => (
                                        <label key={optionIndex} className="flex items-center space-x-3 mb-2">
                                            <input 
                                                type="radio" 
                                                name={`question_${index}`} 
                                                value={option} 
                                                className="form-radio h-5 w-5 text-blue-600" 
                                                disabled={index !== currentQuizQuestionIndex}
                                                onChange={() => handleQuizAnswer(index, option)}
                                            />
                                            <span className="text-gray-700 text-left sm:text-[16px] text-[14px]">{option}</span>
                                        </label>
                                    ))}
                                    {quizAnswers[index] && (
                                        <p className="text-white text-left w-full p-2 bg-green-600">Correct Answer: {mcq.correctAnswer}</p>
                                    )}
                                </form>
                            </div>
                        )) }
                    </div>
                    <div className='flex flex-col justify-center items-start w-full text-center bg-white'>
                        <h1 className="text-white text-3xl w-full bg-black py-3">
                            <span className='font-bold capitalize'>Table</span>
                        </h1>
                        <style dangerouslySetInnerHTML={{ __html: lessonPlanTableStyle }} />
                        <Markdown>{generatedLessonPlan?.table}</Markdown>
                    </div>
                    <div className='flex justify-center w-full text-center bg-white'>
                        <button onClick={()=>console.log("save")} className='bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg focus:outline-none transition duration-200 w-full lg:w-max'>
                            Salva lezione
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default LessonPlan;