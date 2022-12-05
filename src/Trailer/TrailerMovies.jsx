import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovies.css'

function TrailerMovies({movieTitle}) {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] =useState("");
    function handleSearch() {
        setVideo(movieTitle)
        movieTrailer(video).then((res) => {
        setVideoURL(res);
        });
    }
    useEffect(()=>{
        handleSearch()
    },[videoURL])
  return (
    <Fragment>
        <div className='Container'>

        </div>
        <div className='player'>
        <ReactPlayer url={videoURL} controls={true}/>
        </div>
    </Fragment>
  )
}

export default TrailerMovies