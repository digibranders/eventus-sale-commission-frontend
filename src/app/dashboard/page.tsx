import React from 'react'
import SalesChart from '../components/SalesChart/SalesChart'

type Props = {}

function page({ }: Props) {
    return (
        <div className='dashboard-wrapper'>
            <SalesChart />
        </div>
    )
}

export default page