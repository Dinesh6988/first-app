import React from "react";
import { Input } from 'antd';
import {UserOutLined} from ' @ant-design/icons';
function Input () {
    return (
        <React.Fragment>
            <div className="input">
                 <Input.search>
                 placeholder='name'
                 maxlength{10}
                 prefix={<UserOutLined/>}
                 </Input.search>
            </div>
        </React.Fragment>
    );
}
export default Input;