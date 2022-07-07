import React from 'react'
import './styles.scss'
import { useTranslation } from 'react-i18next'

export default function Card({imgUrl, projectName, technologies, handleOpen }) {
  
  const {t} = useTranslation(['portfolio'])
  return (
    <div className='card'>
        <div className='card__banner'>
            <img src={imgUrl} alt='banner'/>
        </div>
        <div className='card__text'>
            <div className='projectName'>{t(projectName)}</div>
            <div className='technologies'>{technologies}</div>
        </div>
        <div className='card__button'>
          <button onClick={handleOpen}>Learn more</button>
        </div>
    </div>
  )
}
