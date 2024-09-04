"use client";

import React from 'react'
import Breadcrumb from '@@/app/components/Common/Breadcrumb'
import { Select, Table } from 'antd'

type Props = {}

interface DataType {
    key: React.Key;
    customer_name: string;
    time_period: string;
    total_business_amount: string;
    retension_rate: string;
    profit_margin: string;
    profit: string;
}

function page({ }: Props) {

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customer_name',
            key: '1',
            width: 270,
            
            sorter: (a: DataType, b: DataType) => a.customer_name.localeCompare(b.customer_name),

        },
        {
            title: 'Time Period',
            dataIndex: 'time_period',
            key: '2',
        },
        {
            title: 'Total Business Amount',
            dataIndex: 'total_business_amount',
            key: '3',
        },
        {
            title: 'Retention Rate',
            dataIndex: 'retension_rate',
            key: '4',
        },
        {
            title: 'Profit Margin',
            dataIndex: 'profit_margin',
            key: '5',
        },
        {
            title: 'Profit',
            dataIndex: 'profit',
            key: '6',
        }
    ];

    const data: DataType[] = [
        {
            key: '1',
            customer_name: 'Aditya Birla Fashion and Retail Limited',
            time_period: '2021',
            total_business_amount: '₹ 1,00,000',
            retension_rate: '10%',
            profit_margin: '10%',
            profit: '₹ 10,000',
        },
        {
            key: '2',
            customer_name: 'Ageas Federal Life Insurance Co Ltd',
            time_period: '2021',
            total_business_amount: '₹ 1,00,000',
            retension_rate: '10%',
            profit_margin: '10%',
            profit: '₹ 10,000',
        },
        {
            key: '3',
            customer_name: 'Apeejay Global Industrial And Logistic Park Limited',
            time_period: '2021',
            total_business_amount: '₹ 1,00,000',
            retension_rate: '10%',
            profit_margin: '10%',
            profit: '₹ 10,000',
        },
        {
            key: '4',
            customer_name: 'Apeejay House Private Limited',
            time_period: '2021',
            total_business_amount: '₹ 1,00,000',
            retension_rate: '10%',
            profit_margin: '10%',
            profit: '₹ 10,000',
        },
        {
            key: '5',
            customer_name: 'Apeejay Insurance Broking Services Private Limited',
            time_period: '2021',
            total_business_amount: '₹ 1,00,000',
            retension_rate: '10%',
            profit_margin: '10%',
            profit: '₹ 10,000',
        },
        {
            key: '6',
            customer_name: 'Tata Birla Fashion and Retail Limited',
            time_period: '2021',
            total_business_amount: '₹ 1,00,000',
            retension_rate: '10%',
            profit_margin: '10%',
            profit: '₹ 10,000',
        },
    ];



    return (
        <div className='dashboard-wrapper'>
            <div className='flex justify-between items-center py-1'>
                <Breadcrumb />
                <Select
                    defaultValue="Quarter 1"
                    style={{ width: 120 }}
                    options={[
                        { value: 'quarter_1', label: 'Quater 1' },
                        { value: 'quarter_2', label: 'Quarter 2' },
                        { value: 'quarter_3', label: 'Quarter 3' },
                    ]}
                />
            </div>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default page