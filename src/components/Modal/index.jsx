import React from 'react'
import './styles.scss'
import Flyer from '../Flyer'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Modal({children, handleClose, data}) {
  return (
    <div className='modal'>
      <div className="modal__nav">
        <button onClick={handleClose}>
          <AiFillCloseCircle />
        </button>
      </div>
        <Flyer handleClose={handleClose} data={data} />
    </div>
  )
}
