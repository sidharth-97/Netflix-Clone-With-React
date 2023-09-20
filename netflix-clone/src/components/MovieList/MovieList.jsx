import React, { useEffect, useState } from 'react'
import Youtude from 'react-youtube'
import './MovieList.css'
import axios from '../../axios'
import { image_url,api_key } from '../../utils/constants'

export default function MovieList({title,isSmall,url}) {
    const [movies, setmovies] = useState([])
    const [urlId,setUrlId]=useState("")
    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response.data);
            setmovies(response.data.results)
      })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };
    
    const viewTrailer = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length>0) {
                setUrlId(response.data.results[0])
            }
        })
       
    }
    return (

      <div className="row">
            <h1>{ title}</h1>
            <div className="posters">
                {movies.map((obj, index) => {
                    return  <img onClick={()=>viewTrailer(obj.id)} className={isSmall?"smallPoster":"poster"} src={`${image_url}/${obj.backdrop_path
                    }`} alt="poster" />
                })}      
            </div>
           {urlId &&  <Youtude videoId={urlId.key} opts={opts}/>}
    </div>
  )
}
