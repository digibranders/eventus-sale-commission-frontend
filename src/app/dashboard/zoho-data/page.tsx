"use client";
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Breadcrumb from '@@/app/components/Common/Breadcrumb';

type Props = {};
interface DataType {
  key: React.Key;
  name: string;
  address: string;
  date: string;
  month: string;
  export_domestic: string;
  customer_name: string;
  sales_order_no: string;
}

function Page({ }: Props) {

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Sales Person Name',
      width: 155,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Date',
      width: 120,
      dataIndex: 'date',
      key: 'date',
      sorter: true,
    },
    { title: 'Month', dataIndex: 'month', key: '1', width: 150 },
    { title: 'Export/Domestic', dataIndex: 'export_domestic', key: '2', width: 150 },
    { title: 'Customer Name', dataIndex: 'customer_name', key: '3', width: 230 },
    { title: 'Sales Order No.', dataIndex: 'sales_order_no', key: '4', width: 280 },
    { title: 'Invoice No.', dataIndex: 'address', key: '5', width: 150 },
    { title: 'Base Value', dataIndex: 'address', key: '6', width: 150 },
    { title: 'Tax', dataIndex: 'address', key: '7', width: 150 },
    { title: 'Invoice Value', dataIndex: 'address', key: '8', width: 150 },
    { title: 'Product/Services', dataIndex: 'address', key: '9', width: 150 },
    { title: 'Department', dataIndex: 'address', key: '10', width: 150 },
    { title: 'Vendor Name', dataIndex: 'address', key: '11', width: 150 },
    { title: 'Invoice No.', dataIndex: 'address', key: '5', width: 150 },
    { title: 'PO No.', dataIndex: 'address', key: '5', width: 150 },
    { title: 'Base Value', dataIndex: 'address', key: '6', width: 150 },
    { title: 'Tax', dataIndex: 'address', key: '6', width: 150 },
    { title: 'Invoice Value', dataIndex: 'address', key: '8', width: 150 },
    { title: 'Other Cost', dataIndex: 'address', key: '9', width: 150 },
    { title: 'Margin', dataIndex: 'address', key: '8', width: 150 },
    { title: 'Payment Status', dataIndex: 'address', key: '9', width: 150 },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Aditya Anand',
      date: '03-09-2024',
      month: 'September',
      address: 'Bengaluru',
      export_domestic: 'export',
      customer_name: 'Trend Micro Australia Pty Ltd ($)',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '2',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '3',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '4',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '5',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '6',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '7',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '8',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '9',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '10',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '11',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
    {
      key: '12',
      name: 'Siddique Ahmed',
      date: '03-09-2024',
      month: 'September',
      address: 'Navi Mumbai',
      export_domestic: 'import',
      customer_name: 'Mjunction Services Limited',
      sales_order_no: 'Soumen De/Manash_d email dt 30.3.23'
    },
  ];

  return (
    <div className='dashboard-wrapper max-w-[1210px]'>
      <div>
        <Breadcrumb />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
      />
    </div>
  );
}

export default Page;
