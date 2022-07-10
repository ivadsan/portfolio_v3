import React from 'react'
import "./styles.scss"
import MyPhoto from '../MyPhoto'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Credentials from '../Credentials'

export default function SideMenu() {
  return (
    <div className='sideMenu'>
      <div>
        <MyPhoto />
        <Credentials />
      </div>
      <NavBar />
      <Footer />
    </div>
  )
}
