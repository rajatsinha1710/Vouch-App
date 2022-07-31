import React, { useState } from 'react'
import './App.css' 
import { Button, Checkbox, Form, Input} from 'antd';
import axios from 'axios';


function MainBody() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const HandleLogin = () =>{
        console.log({email, password});
        axios.post( "https://reqres.in/api/login", {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res.data);
            alert('Login Successfully')
        })
        .catch(error =>{
            console.error(error);
            alert('user not found')
        })
    }

    const onFinish = () => {
        console.log('Success:', );
      };
    
      const onFinishFailed = () => {
        console.log('Failed:',);
      };
  return (
    <div className='content-wrapper'>
        <div className='container'>
            <div className='login-banner row'>
                <div className='login-window'>
                    <div className='login-wrapper'>
                    <div className='form-container'>
                        <h2 className='form-title'>Welcome Back</h2>
                        <p className='subText'>Sub-title text goes here</p>
                        <Form
                        name="complex-basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                        >
                        <Form.Item
                            name="Email"
                            rules={[{ required: true, message: 'Please input your Email Address!' }]}
                            
                        >
                            <Input placeholder='Email Address' value={email} onChange={handleEmail} className='email-input' type='email' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder='Password' className='password-input' value={password} onChange={handlePassword}/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" className='submit-btn' onClick={HandleLogin}>
                            Login
                            </Button>
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="unchecked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox className='remember'>Remember Password</Checkbox>
                        </Form.Item>
                        </Form>
                    </div>
                    </div>
                </div>
                <div className="banner">
                    <div className='banner-wrapper'>
                        <img src="http://wpbusinesssolution.com/banner.png" alt="banner-img" className='banner-img' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody