import React, { useState } from 'react'
import ContainerCustom from '../../../common/Container'
import { Header, LessonPlan } from './components'
import { toast } from 'react-toastify';
import { UserAuth } from '@/shared/context/AuthContext';

const Dashboard = () => {
    const { user, loading } = UserAuth();
    const [userUrl, setUserUrl] = useState('');
    const [generatedLessonPlan, setGeneratedLessonPlan] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleClear = () => {
        setUserUrl('');
        setGeneratedLessonPlan({});
    }

    const handleSubmit = async () => {
        if (!userUrl) {
            toast.error('Please enter any wikipedia or youtube url')
            return
        }
        
        try {
            setIsLoading(true);
            const response = await fetch('https://flaskapinextjs.vercel.app/lesson-planner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: userUrl, teacher_type: "elementary school teacher" })
            });

            const data = await response.json();
            if (Object.keys(data).length === 1 && data.message) {
                toast.error(data.message);
                return
            }
            setGeneratedLessonPlan(data);

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, please try again later.')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex flex-col gap-[10rem]">
            <ContainerCustom className="relative">
                <Header
                    user={user}
                    loading={loading}
                    userUrl={userUrl} 
                    handleUrlChange={e => setUserUrl(e.target.value)} 
                    handleClear={handleClear}
                    handleSubmit={handleSubmit}
                />
            </ContainerCustom>
            <ContainerCustom className="relative">
                {isLoading ? (
                    <div className="flex justify-center items-center h-full flex-col gap-6">
                        <div className="animate-ping rounded-full h-[40px] w-[40px] border-4 border-[#69ff37]"></div>
                        <div className="text-1xl font-bold text-gray-900 loadingText uppercase tracking-tighter">Generating Plan</div>
                    </div>
                ) : (
                    <LessonPlan generatedLessonPlan={generatedLessonPlan}/>
                )}
            </ContainerCustom>
        </div>
    )
}

export default Dashboard