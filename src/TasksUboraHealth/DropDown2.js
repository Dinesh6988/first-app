import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a>Senior Care</a>,
    key: '0',
  },
  {
    label: <a>Doctors</a>,
    key: '1',
  },
  {
    label: <a>Care Givers</a>,
    key: '3',
  },
];
const DropDown2 = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
       Our Services
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDown2;