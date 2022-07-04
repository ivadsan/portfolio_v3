import React from 'react'
import './styles.scss'
import {GoMail} from 'react-icons/go'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'




export default function Footer() {
  return (
    <div className='footer'>
       <GoMail />
       <FaLinkedinIn />
       <FaGithub />
    </div>
  )
}
