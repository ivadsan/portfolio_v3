import React from 'react'
import './styles.scss'
import { useTranslation } from 'react-i18next';

export default function LngBar() {

    const {t, i18n} = useTranslation()

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

  return (
    <div className='lngBar'>
     
        <select onChange={(ev)=>changeLanguage(ev.target.value)} defaultValue={i18n.language}>
            <option value='es'>Español</option>
            <option value='en'>English</option>
        </select>
    </div>
  )
}
