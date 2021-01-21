import React, { useState } from 'react';
import {Nav, initializeIcons} from '@fluentui/react'

const links = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        key: 'key1',
        iconProps: {
          iconName: 'Home',
          styles:{
            root:{
              fontSize:20,
              color: '#106ebe'
            }
          }
        }
      },
      {
        name: 'Tasks',
        url: '/task',
        key: 'key1',
        iconProps: {
          iconName: 'TaskManager',
          styles:{
            root:{
              fontSize:20,
              color: '#106ebe'
            }
          }
        }
      },
      {
        name: 'Contacts',
        url: '/contact',
        key: 'key1',
        iconProps: {
          iconName: 'ContactList',
          styles:{
            root:{
              fontSize:20,
              color: '#106ebe'
            }
          }
        }
      }
    ]
  }
]

const navigationStyles = {
  root: {
    height: '10vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'visable', 
    marginBottom:'5vh'   
  }
}

const NavBar1 = (props) => {
  initializeIcons();

  return (
    <div className="ms-Grid-col" dir="ltr">
    <Nav
    groups={links}
    selectedKey="key1"
    styles={navigationStyles}/>
    </div>

    


  );
}

export default NavBar1;

