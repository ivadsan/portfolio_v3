import React from 'react'
import './styles.scss'
import SideMenu from '../../components/SideMenu'
import LngBar from '../../components/LngBar'
import SideMenuMobile from '../../components/SideMenuMobile'
import Header from '../../components/Header'

export default function Portfolio({children}) {
  return (
    <div className='container'>
        <SideMenu />
        <SideMenuMobile/>
        <Header/>
        <div className='content' id='container_content'>
            <LngBar />
            {children}
        </div>
    </div>
  )
}
