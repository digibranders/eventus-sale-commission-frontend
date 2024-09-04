import React from 'react'
import SalesChart from '../components/SalesChart/SalesChart'
import Breadcrumb from '../components/Common/Breadcrumb'

type Props = {}

function page({ }: Props) {
    return (
        <div className='dashboard-wrapper'>
            <Breadcrumb />
            <SalesChart />
        </div>
    )
}

export default page