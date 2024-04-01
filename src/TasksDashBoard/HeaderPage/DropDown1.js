import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a>Espanol</a>,
    key: '0',
  },
  {
    label: <a>English</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
];
const DropDown1 = () => (
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
export default DropDown1;