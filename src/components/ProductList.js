import React from 'react';
import { Popconfirm, Table } from 'antd';

const ProductList = ({ onDelete, products }) => {
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '操作',
            render: (text, record) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                        <span style={{ cursor: 'pointer' }}>删除</span>
                    </Popconfirm>
                );
            },
        },
    ];

    return <Table rowKey="id" columns={columns} dataSource={products} pagination={false} />;
};

export default ProductList;
