import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a>Espanol</a>,
  },
  {
    label: <a>English</a>,
  },
];
const Dropdown1 = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        English
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Dropdown1;