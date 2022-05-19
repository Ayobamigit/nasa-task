import React, { createContext, useEffect, useState } from 'react'
import axios from '../../plugins/axios';
import BannerImage from '../../components/BannerImage/BannerImage'
import Header from '../../components/Header/Header'
import { allMovies, dailyPicture } from '../../plugins/urls';
import MoviesList from '../../components/MoviesList/MoviesList';

export const LandingPageContext = createContext();

const LandingPage = () => {
  const [state, setState] = useState({
    imageInfo: null,
    movieList: []
  })

  /**  
   * On the load of this page, the useEffect function runs to get all details 
   * needed to be displayed on the page
  **/
  useEffect(()=>{

    //API call to get the picture of the day
    axios({
      method: 'get',
      url: `${dailyPicture}`,
      params:{
        api_key:process.env.REACT_APP_NASA_API_KEY
      }
    })
    .then(res=>{
      setState(state=>({
        ...state,
        imageInfo: res.data
      }))
    })

    //API call to get all movies
    axios({
      method: 'get',
      url: `${allMovies}`,
      params:{
        api_key:process.env.REACT_APP_IMDB_API_KEY,
        language: 'en-US',
        query: 'NASA',
        include_adult: false,
      }
    }).then(res=>{
      setState(state=>({
        ...state,
        movieList: res.data.results
      }))
    })
  },[])
  return (
    <LandingPageContext.Provider value={{
      state
    }}>  
        <Header />
        <BannerImage image={state.imageInfo} />
        <MoviesList />
    
    </LandingPageContext.Provider>
  )
}

export default LandingPage