import React from 'react'
import './styles.scss'

export default function Card({imgUrl, projectName, technologies, handleClick }) {
  return (
    <div className='card'>
        <div className='card__banner'>
            <img src={imgUrl} alt='banner'/>
        </div>
        <div className='card__text'>
            <div className='projectName'>{projectName}</div>
            <div className='technologies'>{technologies}</div>
        </div>
        <div className='card__button'>
          <button onClick={handleClick}>Learn more</button>
        </div>
    </div>
  )
}
