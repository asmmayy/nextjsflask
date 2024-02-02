import React, { useState } from 'react'
import ContainerCustom from '../../../common/Container'
import { CancelationInfo } from './components'

const CancelSubscription = () => {
    return (
        <div className="min-h-screen">
            <ContainerCustom className="relative">
                <CancelationInfo />
            </ContainerCustom>
        </div>
    )
}

export default CancelSubscription