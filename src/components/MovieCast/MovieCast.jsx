import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieCredits } from '../MovieList/Movies'
import css from './MovieCast.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export function MovieCast(){

    const{movieId} = useParams()
    const[casts, setCasts] = useState([])
    const[eror, setError] = useState(false)

useEffect(() => {async function getCast(){
    try{
        const result = await getMovieCredits(movieId);
setCasts(result)
    }catch (error){setError(true)}
} getCast() }, [])

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'

    return(
        <div>
        <ul className={css.list}>
            {casts.length>0 ? casts.map(el => <li key={el.id} className={css.item}>{el.profile_path !==null ? <img src={`${BASE_IMG_URL}${el.profile_path}`} alt="name" className={css.image}/> : <img src='../../../public/no-profile-picture-icon.png' alt='img' className={css.image}/>}<p className={css.name}>{el.name}</p></li>) : <span className={css.name}>Sorry, but there are no movie casts</span>}
            </ul>

            {eror && <ErrorMessage/>}
            </div>
    )
}
