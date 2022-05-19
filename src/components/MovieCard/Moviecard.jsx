import React from 'react'
import './moviecard.scss'
import Dummy from '../../assets/img/dummy.png'
import { useNavigate } from 'react-router'

const Moviecard = ({movie}) => {
  const navigate = useNavigate()
  return (
    movie ?
        <div className='movie-card' onClick={()=>navigate(`/${movie.id}`)}>
            <div className='min-h-[400px] max-h-[400px]'>
                {
                    movie.poster_path?
                    <img src={`${process.env.REACT_APP_IMDB_IMAGE_URL}${movie.poster_path}`} alt="img" />
                    :
                    <img src={Dummy} alt="img" className='pt-16' />
                }
            </div>

            <section className='mt-5'>
                <h1 className='text-center text-default-font font-bold text-[22px]'>{movie.original_title}</h1>
                <h4 className='mt-5 font-bold'>Description:</h4>
                <p className='mt-2.5'>{movie.overview}</p>
                <p className='my-5'>Popularity: <span className='text-default-font'>{movie.popularity}</span></p>
                <p className='my-5'>Release Date: <span className='text-default-font'>{movie.release_date}</span></p>
            </section>
        </div>
    :
    null
    
  )
}

export default Moviecard