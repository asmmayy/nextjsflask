import ContainerCustom from '../../../common/Container'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import useImageLoader from '@/hoooks/useImageLoader'
import { Contact, CustomerReviews, Hero, JoinFastSchool, UsageGuide } from './components'

const Home = () => {
    const isLoading = useImageLoader();

    if (isLoading) {
        return (
            <LoadingSpinner />
        )
    }

    return (
        <>
            <div className="h-full pb-10 flex flex-col gap-[7rem]">
                <ContainerCustom className="relative">
                    <Hero />
                </ContainerCustom>
                <ContainerCustom className="relative">
                    <UsageGuide />
                </ContainerCustom>
                <ContainerCustom className="relative">
                    <JoinFastSchool />
                </ContainerCustom>
                <ContainerCustom className="relative" style={{ height: '220px', overflow: 'hidden' }}>
                    <CustomerReviews />
                </ContainerCustom>
                <ContainerCustom className="relative" id="contact-form">
                    <Contact />
                </ContainerCustom>
            </div>
        </>
    )
}

export default Home