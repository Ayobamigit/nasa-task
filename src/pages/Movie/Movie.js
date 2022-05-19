import React, { useEffect, useState } from 'react'
import axios from '../../plugins/axios'
import Loader from '../../components/Loader/Loader'
import { individualMovie } from '../../plugins/urls'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import { useMatch } from 'react-router'

const Movie = () => {
  const match = useMatch('/:id');
  const id = match ?  match.params.id : ''
  const [state, setState] = useState({
      movieInfo: null
  }) 

  useEffect(()=>{
      axios({
        method: 'get',
        url: `${individualMovie}/${id}`,
        params:{
            api_key: process.env.REACT_APP_IMDB_API_KEY
        }
    }).then(res=>{
        setState(state=>({
            ...state,
            movieInfo:res.data
        }))
    })
  },[])

  const {movieInfo} = state
  return (
      movieInfo ?
        <MovieDetails movie={movieInfo} />
        :
        <Loader />
  )
}

export default Movie