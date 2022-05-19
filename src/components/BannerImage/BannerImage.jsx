import React from 'react'

const BannerImage = (props) => {
  const {image, className} = props
  return (
      image ?
      <img src={image} alt="img" className={className} />
      :
      null
  )
}

export default BannerImage