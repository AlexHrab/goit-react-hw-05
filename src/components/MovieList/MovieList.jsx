import { Link } from "react-router-dom";
import {useState, useEffect } from "react";
import {getMovieList} from "./Movies";
import css from './MovieList.module.css'
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export function MovieList(){
const[films, setFilms] = useState([])
const[eror, setError] = useState(false)


useEffect(() => {async function getList(){
    try{
        const result = await getMovieList();
        setFilms(result)
    }catch (error){setError(true)}
} getList() }, [])

return(
    <div className={css.box}>
    <ul className={css.list}>
    {films.map(el => 
    
    <li key={el.id} className={css.item}>
    
        <Link to={`${/movies/}${el.id}`}>
        <p className={css.text}>{el.title}</p>
        </Link>
        </li>)}
    </ul>
    {eror && <ErrorMessage/>}
    </div>
)
}