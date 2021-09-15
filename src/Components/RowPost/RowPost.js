import React,{useState,useEffect} from 'react';
import './RowPost.css';
import axios from '../../axios';
import {imageUrl} from '../../constants/Constants'
import {API_KEY} from '../../constants/Constants'
import YouTube from 'react-youtube';

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
       axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
        
       })
    }, [])
    const handleMovie=(id)=>{
        console.log(id)
        setUrlId(id)
    }
    return (
        <div className='row'>
            <h2 className={props.isSmall ? 'smallTitle' : 'title'}>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                
                )}
            </div>
            
        </div>
    )
}

export default RowPost
