"use client";

import React from 'react'
import Breadcrumb from '@@/app/components/Common/Breadcrumb'
import { Select, Table } from 'antd'

type Props = {}

interface DataType {
    key: React.Key;
    name: string;
    customer_success: string;
    customer_success_soc: string;
    customer_success_oem_driven: string;
    cyber_resilience: string;
    soc: string;
    grand_total: string;
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
            title: 'Customer Success',
            dataIndex: 'customer_success',
            key: '2',
        },
        {
            title: 'Customer Success & SOC',
            dataIndex: 'customer_success_soc',
            key: '3',
        },
        {
            title: 'Customer Success-OEM Driven',
            dataIndex: 'customer_success_oem_driven',
            key: '4',
        },
        {
            title: 'Cyber Resilience',
            dataIndex: 'cyber_resilience',
            key: '5',
        },
        {
            title: 'SOC',
            dataIndex: 'soc',
            key: '6',
        },
        {
            title: 'Grand Total',
            dataIndex: 'grand_total',
            key: '7',
        }
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'Aditya Anand',
            customer_success: '₹ 1,00,000',
            customer_success_soc: '₹ 1,00,000',
            customer_success_oem_driven: '₹ 1,00,000',
            cyber_resilience: '₹ 1,00,000',
            soc: '₹ 1,00,000',
            grand_total: '₹ 1,00,000',
        },
        {
            key: '2',
            name: 'Aditya Anand',
            customer_success: '₹ 1,00,000',
            customer_success_soc: '₹ 1,00,000',
            customer_success_oem_driven: '₹ 1,00,000',
            cyber_resilience: '₹ 1,00,000',
            soc: '₹ 1,00,000',
            grand_total: '₹ 1,00,000',
        },
        {
            key: '3',
            name: 'Aditya Anand',
            customer_success: '₹ 1,00,000',
            customer_success_soc: '₹ 1,00,000',
            customer_success_oem_driven: '₹ 1,00,000',
            cyber_resilience: '₹ 1,00,000',
            soc: '₹ 1,00,000',
            grand_total: '₹ 1,00,000',
        },
        {
            key: '4',
            name: 'Aditya Anand',
            customer_success: '₹ 1,00,000',
            customer_success_soc: '₹ 1,00,000',
            customer_success_oem_driven: '₹ 1,00,000',
            cyber_resilience: '₹ 1,00,000',
            soc: '₹ 1,00,000',
            grand_total: '₹ 1,00,000',
        },
        {
            key: '5',
            name: 'Aditya Anand',
            customer_success: '₹ 1,00,000',
            customer_success_soc: '₹ 1,00,000',
            customer_success_oem_driven: '₹ 1,00,000',
            cyber_resilience: '₹ 1,00,000',
            soc: '₹ 1,00,000',
            grand_total: '₹ 1,00,000',
        },
        {
            key: '6',
            name: 'Aditya Anand',
            customer_success: '₹ 1,00,000',
            customer_success_soc: '₹ 1,00,000',
            customer_success_oem_driven: '₹ 1,00,000',
            cyber_resilience: '₹ 1,00,000',
            soc: '₹ 1,00,000',
            grand_total: '₹ 1,00,000',
        },
        {
            key: '7',
            name: 'Zakir Hussain',
            customer_success: '₹ 1,00,000',
            customer_success_soc: '₹ 1,00,000',
            customer_success_oem_driven: '₹ 1,00,000',
            cyber_resilience: '₹ 1,00,000',
            soc: '₹ 1,00,000',
            grand_total: '₹ 1,00,000',
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