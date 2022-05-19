import React, { useContext } from 'react'
import { LandingPageContext } from '../../pages/LandingPage/LandingPage'

const Header = () => {
  const {state:{imageInfo}} = useContext(LandingPageContext)

  const d = imageInfo ? imageInfo.date : ''
  let newDate = ''

  const getDate = (date)=>{
    if (date){
      newDate = new Date(d)
      console.log(newDate)
    }
  }
  
  getDate(d)
  return (
    <header className='text-center py-2.5'>
        <h1 className='text-primary-font text-xl font-bold'> 
            <span className='text-default-font'>NASA: </span>Picture of the Day
        </h1>
        <h2 className='text-primary-font text-xl font-bold'></h2>
    </header>
  )
}

export default Header