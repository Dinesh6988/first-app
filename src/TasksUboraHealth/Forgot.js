import React from "react";
import "./Forgot.scss";
import { Input} from "antd";
import Forgot_img from "../images/Forgot_img.png";
import Arrow_img from "../images/Arrow_img.png";
import Forgot_img1 from "../images/Forgot_img1.png";
import { useNavigate } from "react-router-dom";

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

function Forgot() {
    const nav= useNavigate();

    const signup = () =>{
        nav("/signup")
    }
  return (
    <React.Fragment>
      <div className="forgot_logo_img">
        <img src={Forgot_img} alt="no-img" onClick={()=>nav(-1)} />
      </div>
      <div className="forgot_container">
        <div className="forgot_form">
          <h1>Forgot Password</h1>
          <div className="forgot_email">
            <label>Email:</label>
            <Input placeholder="Enter Email" />
          </div>
          <img src={Arrow_img} alt="no-img" className="arrow" onClick={()=> nav(-1)}/>
          <h4>
            Don't have an account?<span onClick={signup}>sign up</span>
          </h4>
        </div>
        <div className="forgot_image">
          <img src={Forgot_img1} alt="no-img" />
        </div>
      </div>
    </React.Fragment>
//     <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your username!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
  );
}
export default Forgot;
