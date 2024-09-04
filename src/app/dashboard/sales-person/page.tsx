import React from 'react'
import { Table, Select } from "antd";
import type { TableColumnsType } from "antd";
import Breadcrumb from '@@/app/components/Common/Breadcrumb';


type Props = {}

interface DataType {
    key: React.Key;
    name: string;
    leader: string;
    variable: string;
    bottom_line_target_quota: string;
    anual_ctc: string;
}

function page({ }: Props) {

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Sales Person Name',
            dataIndex: 'name',
            key: '1',
            width: 210,
        },
        {
            title: 'Leader',
            dataIndex: 'leader',
            key: '2',
            width: 210,
        },
        {
            title: 'Annual CTC',
            dataIndex: 'anual_ctc',
            key: '3',
            width: 210,
        },
        {
            title: 'Variable (40%)',
            dataIndex: 'variable',
            key: '4',
            width: 210,

        },
        {
            title: 'Bottom line Target Quota against 40% Variable',
            dataIndex: 'bottom_line_target_quota',
            key: '5',
        }
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '2',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '3',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '4',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '5',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '6',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '7',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '8',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '9',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        },
        {
            key: '10',
            name: 'Aditya Anand',
            leader: 'Siddique Ahmed',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '1,00,000',
        }
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