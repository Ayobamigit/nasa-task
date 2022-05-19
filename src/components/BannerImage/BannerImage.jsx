import React, { useContext } from 'react'

const BannerImage = ({props}) => {
  const {image} = props
  return (
    // <div>
        image ?
        <img src={image.url} alt="img" className='w-full' />
        :
        null
    // </div>
  )
}

export default BannerImage