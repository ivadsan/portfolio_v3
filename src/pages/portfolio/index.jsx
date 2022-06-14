import React from 'react'
import './styles.scss'
import SideMenu from '../../components/SideMenu'
import Content from '../../components/Content'

export default function Portfolio() {
  return (
    <div className='container'>
        <SideMenu />
        <Content/>
    </div>
  )
}
