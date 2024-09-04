"use client";

import React from 'react'
import Breadcrumb from '@@/app/components/Common/Breadcrumb'
import { Select, Table } from 'antd'

type Props = {}

interface DataType {
    key: React.Key;
    name: string;
    liscence: string;
    services: string;
    appliances: string;
    total: string;
}

function page({ }: Props) {

    const columns = [
        {
            title: 'Sales Persom Name',
            dataIndex: 'name',
            key: '1',
            width: 200,
            sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),

        },
        {
            title: 'Licence',
            dataIndex: 'liscence',
            key: '2',
        },
        {
            title: 'Services',
            dataIndex: 'services',
            key: '3',
        },
        {
            title: 'Appliances',
            dataIndex: 'appliances',
            key: '4',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: '5',
        }
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'Akshay Kathavale',
            liscence: '-',
            services: '40%',
            appliances: '-',
            total: '1,00,000',
        },
        {
            key: '2',
            name: 'Ankit Pandey',
            liscence: '-',
            services: '40%',
            appliances: '-',
            total: '1,00,000',
        },
        {
            key: '3',
            name: 'Devika Kadam',
            liscence: '-',
            services: '40%',
            appliances: '-',
            total: '1,00,000',
        },
        {
            key: '4',
            name: 'Gaurav Pathak',
            liscence: '-',
            services: '40%',
            appliances: '-',
            total: '1,00,000',
        },
        {
            key: '5',
            name: 'Karan Angiah',
            liscence: '-',
            services: '40%',
            appliances: '-',
            total: '1,00,000',
        },
        {
            key: '6',
            name: 'Madhu Sanjiv',
            liscence: '-',
            services: '40%',
            appliances: '-',
            total: '1,00,000',
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