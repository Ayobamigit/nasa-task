import React from 'react'
import Dummy from '../../assets/img/dummycover.png'

const BannerImage = (props) => {
  const {image, className} = props
  return (
      image ?
      <img src={image} alt="img" className={className} />
      :
      <img src={Dummy} alt="img" className={className} />

  )
}

export default BannerImage