import React from 'react';
import PropTypes from 'prop-types';
import { Popconfirm, Table, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
    const columns = [
        {
            title: 'name',
            dataIdex: 'name',
        },
        {
            title: 'actions',
            render: (text, record) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            },
        },
    ];
    return <Table rowKey="id" columns={columns} dataSource={products} pagination={false} />;
};
ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};
export default ProductList;
