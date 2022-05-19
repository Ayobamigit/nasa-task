import React, { useContext } from 'react'
import { LandingPageContext } from '../../pages/LandingPage/LandingPage'
import Moviecard from '../MovieCard/Moviecard'

const MoviesList = () => {
    const {state:{movieList}} = useContext(LandingPageContext)
  return (
    <div className='px-5 pt-5 pb-10 grid grid-cols-5 gap-5'>
        {
            movieList?
            movieList.map((movie, i)=>{
                return(
                    <Moviecard movie={movie} key={i} />
                )
            })
            :
            null
        }
    </div>
  )
}

export default MoviesList