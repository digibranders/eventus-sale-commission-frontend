import Breadcrumb from '@@/app/components/Common/Breadcrumb'
import React from 'react'
import { Table, Select } from "antd";
import type { TableColumnsType } from "antd";

type Props = {}

interface DataType {
    key: React.Key;
    variable: string;
    bottom_line_target_quota: string;
    anual_ctc: string;
    achievement: string;
    team_achievement: string;
    total_achievement: string;
}

function page({ }: Props) {

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Annual CTC',
            dataIndex: 'anual_ctc',
            key: '1',
            width: 210,
        },
        {
            title: 'Variable',
            dataIndex: 'variable',
            key: '2',
            width: 210,

        },
        {
            title: 'Bottom line Target Quota against 40% Variable',
            dataIndex: 'bottom_line_target_quota',
            key: '3',
        },
        {
            title: 'Achievement',
            dataIndex: 'achievement',
            key: '4',
        },
        {
            title: 'Team Achievement',
            dataIndex: 'team_achievement',
            key: '5',
        },
        {
            title: 'Total Achievement',
            dataIndex: 'total_achievement',
            key: '6',
        }
    ];

    const data: DataType[] = [
        {
            key: '1',
            anual_ctc: '₹ 1,00,000',
            variable: '₹ 1,00,000',
            bottom_line_target_quota: '₹ 1,00,000',
            achievement: '₹ 1,00,000',
            team_achievement: '₹ 1,00,000',
            total_achievement: '₹ 1,00,000',
        },
        {
            key: '2',
            anual_ctc: '₹ 1,00,000',
            variable: '₹ 1,00,000',
            bottom_line_target_quota: '₹ 1,00,000',
            achievement: '₹ 1,00,000',
            team_achievement: '₹ 1,00,000',
            total_achievement: '₹ 1,00,000',
        },
        {
            key: '3',
            anual_ctc: '₹ 1,00,000',
            variable: '40%',
            bottom_line_target_quota: '₹ 1,00,000',
            achievement: '₹ 1,00,000',
            team_achievement: '₹ 1,00,000',
            total_achievement: '₹ 1,00,000',
        },
        {
            key: '4',
            anual_ctc: '₹ 1,00,000',
            variable: '₹ 1,00,000',
            bottom_line_target_quota: '₹ 1,00,000',
            achievement: '₹ 1,00,000',
            team_achievement: '₹ 1,00,000',
            total_achievement: '₹ 1,00,000',
        },
        {
            key: '5',
            anual_ctc: '₹ 1,00,000',
            variable: '₹ 1,00,000',
            bottom_line_target_quota: '₹ 1,00,000',
            achievement: '₹ 1,00,000',
            team_achievement: '₹ 1,00,000',
            total_achievement: '₹ 1,00,000',
        },
        {
            key: '6',
            anual_ctc: '₹ 1,00,000',
            variable: '₹ 1,00,000',
            bottom_line_target_quota: '₹ 1,00,000',
            achievement: '₹ 1,00,000',
            team_achievement: '₹ 1,00,000',
            total_achievement: '₹ 1,00,000',
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