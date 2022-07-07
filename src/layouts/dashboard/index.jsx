import React from 'react'
import './styles.scss'
import SideMenu from '../../components/SideMenu'
import LngBar from '../../components/LngBar'

export default function Portfolio({children}) {
  return (
    <div className='container'>
        <SideMenu />
        <div className='content' id='container_content'>
            <LngBar />
            {children}
        </div>
    </div>
  )
}
