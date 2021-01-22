import React, { useState } from 'react';
import {Nav, initializeIcons} from '@fluentui/react'

const links = [
  {
    links: [
      {
        name: 'Home',
        url: '#/', 
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
        url: '#/task',
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
        name: 'Add task',
        url: '#/addtask',
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
        name: 'Record',
        url: '#/record',
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
        url: '#/contact',
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
    height: '5vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'visable', 
    width: '100%',
    marginBottom: '12vh'
  }
}

const NavBar = (props) => {
  initializeIcons();

  return (
  
      <div className="ms-Grid-row">
    <Nav
    groups={links}
    selectedKey="key1"
    styles={navigationStyles}/>
    </div>
   



  );
}

export default NavBar;

