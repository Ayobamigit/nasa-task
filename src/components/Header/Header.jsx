import React, { useContext } from 'react'
import { LandingPageContext } from '../../pages/LandingPage/LandingPage'
import moment from 'moment'

const Header = () => {
  const {state:{imageInfo}} = useContext(LandingPageContext)

  const date = imageInfo ? imageInfo.date : null

  return (
    <header className='text-center py-2.5'>
        <h1 className='text-primary-font text-xl font-bold'> 
            <span className='text-default-font'>NASA: </span>Picture of the Day
        </h1>
        <h2 className='text-primary-font text-xl font-bold'>{date ? moment(date).format('dddd, MMMM D, YYYY') : 'Friday, May 20, 2022'}</h2>
    </header>
  )
}

export default Header