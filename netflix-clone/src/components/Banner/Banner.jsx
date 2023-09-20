import React,{useEffect} from 'react'
import './Banner.css'
import { api_key,image_url } from '../../utils/constants'
import axios from "../../axios"
import { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

export default function Banner() {
    const [movie, setMovie] = useState()
    const num=Math.floor(Math.random() * 20)
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${api_key}&language=en-US`).then((response) => {
            setMovie(response.data.results[num])
        })
    }, [])
    
  return (
      <div 
          style={{backgroundImage:`url(${image_url}/${movie?.backdrop_path
          })`}}
    className='banner'>
       <div className='content' >
              <h1 className='title'>{ movie?.title ||  movie?.name }</h1>
           <div className='banner_buttons' >
                  <button className='button' >
                      <PlayArrowIcon/>Play
               </button>
                  <button className='Infobutton' >
                      <InfoIcon/>Info
               </button>
           </div>
              <h1 className='description'>{movie?.overview }</h1>
          </div>
          <div className="fade"></div>
   </div>
  )
}


