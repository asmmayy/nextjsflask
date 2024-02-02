import React, { useState } from 'react'
import ContainerCustom from '../../../common/Container'
import { JoinFastSchool } from '../../landingPages/Home/components';

const SubscriptionPlans = () => {
    return (
        <div className="min-h-screen flex flex-col gap-[10rem]">
            <ContainerCustom className="relative py-20">
                <JoinFastSchool />
            </ContainerCustom>
        </div>
    )
}

export default SubscriptionPlans