import React from 'react'

const MovieInfo = ({info}) => {
    const {original_title, tagline, overview, vote_average, vote_count, status, imdb_id, budget, production_countries, genres, spoken_languages} = info
  return (
    <div className='p-2'> 
        <h2 className='text-white text-2xl font-bold'>
            Title: <span>{original_title}</span>
        </h2>
        <h2 className='text-white text-2xl font-bold'>
            Tagline: <span>{tagline}</span>
        </h2>
        <h2 className='text-white text-2xl font-bold'>
            Overview: <span>{overview}</span>
        </h2>
        <h2 className='text-white text-2xl font-bold'>
            Vote Average: <span>{vote_average}</span>
        </h2>
        <h2 className='text-white text-2xl font-bold'>
            Total Votes: <span>{vote_count}</span>
        </h2>
        <h2 className='text-white text-2xl font-bold'>
            Status: <span>{status}</span>
        </h2>
        <h2 className='text-white text-2xl font-bold'>
            IMDB Link: <span className='underline text-link-font'>
                    <a href={`https://www.imdb.com/title/${imdb_id}/`} target="_blank">{imdb_id} </a>
                </span>
        </h2>
        <h2 className='text-white text-2xl font-bold'>
            Budget: <span>{budget === 0 ? 'Unknown budget costs' : budget}</span>
        </h2>
        <h2 className='text-white text-2xl font-bold'> Production Countries: </h2>
        <ul className='text-white text-base font-normal'>
            {
                production_countries ? 
                production_countries.map((country, i)=>{
                    return (
                        <li>{country.name}</li>
                    )
                })
                :
                null
            }
        </ul>
        <h2 className='text-white text-2xl font-bold'> Genres: </h2>
        <ul className='text-white text-base font-normal'>
            {
                genres ? 
                genres.map((genre, i)=>{
                    return (
                        <li>{genre.name}</li>
                    )
                })
                :
                null
            }
        </ul>
        <h2 className='text-white text-2xl font-bold'> Languages: </h2>
        <ul className='text-white text-base font-normal'>
            {
                spoken_languages ? 
                spoken_languages.map((language, i)=>{
                    return (
                        <li>{language.name}</li>
                    )
                })
                :
                null
            }
        </ul>
    </div>
  )
}

export default MovieInfo