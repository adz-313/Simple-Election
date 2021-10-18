import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Navbar = ({currentAccount}) => {
    return (
        <div>
            <Menu text>
                <Menu.Item header>Election</Menu.Item>
                
                <Menu.Menu position='right'>
                    <Menu.Item header>Current Account: {currentAccount}</Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Navbar
