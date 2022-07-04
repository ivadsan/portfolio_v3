import React from 'react'
import "./styles.scss"
import MyPhoto from '../MyPhoto'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function SideMenu() {
  return (
    <div className='sideMenu'>
      <MyPhoto />
      <NavBar />
      <Footer />
    </div>
  )
}
