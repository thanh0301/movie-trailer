import React,{ Fragment,useState,useEffect,useContext}from 'react'
import { Container } from './NavBar'
import axios from 'axios'
import {AiFillPlayCircle,AiOutlineClose} from 'react-icons/ai'

import NoImg from '../img/NoImg.png'
import '../Styles/Video.css'

function Trends() {
  const {toggle} =useContext(Container)
  
  const Api ='https://api.themoviedb.org/3'
  const TrendsShow = '/trending/all/week'
  const [trendArray,setTrendArray] = useState([])
  const [trendtitle,setTrendTitle] =useState('')
  const [trailer,setTrailer] =useState(true)
  
  const Images = 'https://image.tmdb.org/t/p/w500'
  const Trends = async()=> {
    const data= await axios.get(`${Api}${TrendsShow}`,{
      params :{
        api_key:'476b7e5db6a93693fcc1ac40e1630adf',
      }
    })
    const results= data.data.results
    setTrendArray(results)
    }
 
    useEffect(() =>{
      setTimeout(() =>{
        Trends()
      },100)
    },[])
 
    const TrendTitle =(trend) =>{
      setTrendTitle(trend.title)
      setTrailer(!trailer)
    }
  return (
   <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
      <div className='movies-container'>
          {trendArray.map((trend) =>{
            return(
              <Fragment>
                  <div id={ trailer ? 'container' : 'NoContainer'}>
                  <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide' } onClick={() => TrendTitle(trend) }/>
                  <img src={trend.poster_path ? `${Images}${trend.poster_path}` :NoImg} alt=''  onClick={() => TrendTitle(trend) } /> 
                  <h3 id='smaller-Text'  className={toggle ? 'mainColor' : 'secondaryColor'} > {trend.title}</h3>
                  </div>
              </Fragment>
            )
          })
          }  
            <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : "LightThemeClose"} fontSize={55} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)} /> 
      </div>
      </div>
   </Fragment>
  )
}

export default Trends