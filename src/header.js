import React from 'react'
import { Button, Menu } from 'antd'
import './App.css'


function AppHeader() {
  
  return (
    <div className='container-fluid'>
        <div className='header'>
            <div className='logo'></div>
            <Menu mode='horizontal'>
              <div className='btn-container'>
              <Button type='primary' size='default' className='trial-btn'>
                    Start Free Trial
                </Button>
                <a href="/">
                <Button type='primary' className='login-btn'  >
                    Login
                </Button>
                </a>
                
                
              </div>
                
            </Menu>
        </div>
    </div>
  )
}

export default AppHeader