import React,{Fragment, useContext,useEffect,useState} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { Container } from './NavBar'
import Video from '../Styles/Video.css'
import NoImg from '../img/NoImg.png'
import axios from 'axios'
function TvShop() {
  const {toggle,inputValue} =useContext(Container)
  const input=inputValue
  const [showData,setShowData]=useState([])
  const [trailer,setTrailer] = useState(true)
  const [title,setTitle] = useState('')
  const Show = input ? 'search' : 'discover'
  const Api= `https://api.themoviedb.org/3/${Show}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500'
  const TvShows = async () =>{
    const data = await axios.get(Api,{
      params :{
        api_key: '476b7e5db6a93693fcc1ac40e1630adf',
        query:input
      }
    })
    const results = (data.data.results)
    setShowData(results)
   
  }
  console.log(setShowData);
  useEffect( () =>{
    setTitle (()=>{
      TvShows()
    },100)

  },[input])
  console.log(TvShows);
  const TvShowsTitle=(show) =>{
    setTitle(show.name)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className="movies-container">
        {showData.map((show) => {
          return(
          <Fragment key={show.id}>
              <div id={ trailer ? 'container' : 'NoContainer'}>
            <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide' } onClick={() => TvShowsTitle(show) } />
              <img src={show.poster_path ? `${Images}${show.poster_path}` : NoImg} alt= "" onClick={() => TvShowsTitle(show) } />
              <h3 id={show.name.lenght > 20 ? 'smaller-Text' : '' } className={toggle ? 'mainColor' : 'secondaryColor'}> {show.name}</h3>
              </div>
          </Fragment>
          )
        })}
        <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : "LightThemeClose"} fontSize={55} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)} />
         </div>
      </div>
    </Fragment>
  )
}

export default TvShop