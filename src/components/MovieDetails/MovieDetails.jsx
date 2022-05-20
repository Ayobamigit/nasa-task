import React from 'react'
import BannerImage from '../BannerImage/BannerImage'
import MovieInfo from './MovieInfo'

const MovieDetails = ({movie}) => {
  return (
    <>
        <BannerImage image={movie.poster_path ? `${process.env.REACT_APP_IMDB_IMAGE_URL}${movie.poster_path}` : null}/>
        <MovieInfo info={movie} />
    </>
  )
}

export default MovieDetails