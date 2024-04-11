import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieReviews } from '../MovieList/Movies'
import css from './MovieReviews.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export function MovieReviews(){

    const{movieId} = useParams()
    const[reviews, setReviews] = useState([])
    const[eror, setError] = useState(false)

useEffect(() => {async function getReviews(){
    try{
        const result = await getMovieReviews(movieId);
setReviews(result)
    }catch (error){setError(true)}
} getReviews() }, [])

    return(
        <div>
        <ul className={css.list}>
           {reviews.length !==0 ? reviews.map(el => <li key={el.id}>{<p className={css.title}>Author: <span className={css.author}>{el.author}</span><span className={css.content}>{el.content}</span></p>}</li>) : <span className={css.name}>Sorry, but there are no movie reviews</span>}
        </ul>

        {eror && <ErrorMessage/>}
        </div> 

    )
}

