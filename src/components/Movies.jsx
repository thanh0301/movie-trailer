import React, { Fragment,useEffect,useState,useContext } from 'react'
import axios from 'axios'
import NoImg from '../img/NoImg.png'
import Video from '../Styles/Video.css'
import TrailerMovies from '../Trailer/TrailerMovies'
import {AiOutlineClose} from 'react-icons/ai'
import {AiFillPlayCircle} from 'react-icons/ai'

import {Container} from './NavBar'
function Movies() {
    const {toggle,inputValue} = useContext(Container)
    const input=inputValue
    const [moviesData, setMoviesData] =useState([])
    const [trailer, setTrailer] = useState(true)
    const [movieTitle,setMovieTitle]=useState('')
    const Show = input ? 'search' : 'discover'
    const Api =`https://api.themoviedb.org/3/${Show}/movie`
    const Images = 'https://image.tmdb.org/t/p/w500'

    const MovieCall = async() =>{
        const data = await axios.get(Api,{
          params :{
            api_key: '476b7e5db6a93693fcc1ac40e1630adf',
            query: input
          }
        })
       const results = data.data.results
       setMoviesData(results)  
    }
      console.log(setMoviesData);
    useEffect(() => {
      setTimeout(() => {
        MovieCall();
      },100)
     
    },[input])

   

    const MoviesTitle = (movie) =>{
      setMovieTitle(movie.title)
      setTrailer(!trailer)
    }
  return (
      <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
      <div className='movies-container'>
        {moviesData.map((movie) => {
           return(
            <Fragment>
              <div id= { trailer ? 'container' : 'NoContainer'}>
                <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide' } onClick={() => MoviesTitle(movie) }/>
                <img src={movie.poster_path ? `${Images}${movie.poster_path}` :NoImg} alt=''  onClick={() => MoviesTitle(movie) } /> 

                <h3 id={movie.title.length > 10 ? 'smaller-Text' : ''} > {movie.title}</h3>
              </div>    
           </Fragment>
           )
        })}
          {trailer ? console.log : <TrailerMovies movieTitle={movieTitle}/>}
           <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : "LightThemeClose"} fontSize={55} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)} />
          </div>
    </div>
      </Fragment>
  )
}

export default Movies