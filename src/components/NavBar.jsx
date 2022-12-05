import React, { Fragment,useState } from 'react'    
import {HiSearch} from 'react-icons/hi'
import '../Styles/NavBarStyle.css'  
import {Routes, Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import Pricing from './Pricing'
import Trends from './Trends'
import TvShop from './TvShop'


export const Container =React.createContext()

function NavBar() {
  const [toggle, setToggle] = useState(true)
  const [inputValue,setInputValue] =useState('')
  return (
    <Container.Provider value={{toggle,inputValue}}>
    <Fragment>
      <nav className={toggle ? '' : 'navBarColor'}>
      <div className='nav-options'>
              <NavLink to>
              <h1 id={toggle ? '' : 'heding'}>REACTFLIX</h1>
              </NavLink>
                <NavLink to="" style={({isActive}) => { return {color:isActive ? '#fff' : '#EE9B00'}}}>
              <span id={toggle ? 'Movies' :'MoviesLight'}>Movies</span>
                </NavLink>
                <NavLink to="/TvShop" style={({isActive}) => { return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' :'MoviesLight'}>Tv Shows</span>
                </NavLink>
                <NavLink to="/Trends" style={({isActive}) => { return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' :'MoviesLight'}>Trending</span>
                  </NavLink>
                  <NavLink to="/Pricing" style={({isActive}) => { return {color:isActive ? '#fff' : '#EE9B00'}}}>
                  <span id={toggle ? 'Movies' :'MoviesLight'}>Pricing</span>
                  </NavLink>
                
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Search Whatever You Want' onChange={(e) => setInputValue (e.target.value)}/>
            <HiSearch fontSize={21} color="green" id='search'/>
            <div id="Color-switcher" onClick={ () => setToggle(!toggle)}>
               <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
            </div>
           
      </nav>
         <Routes>
                <Route path='' element={<Movies/>} ></Route>
                <Route path='TvShop' element={<TvShop/>} ></Route>
                <Route path='Trends' element={<Trends/>} ></Route>
                <Route path='Pricing' element={<Pricing/>} ></Route>
         </Routes>

    </Fragment>
    </Container.Provider>
  )
}

export default NavBar

