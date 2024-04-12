import { MovieList } from "../../components/MovieList/MovieList"
import css from './HomePage.module.css'
import {useState, useEffect } from "react";
import {getMovieList} from "../../components/API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function HomePage(){

    const[films, setFilms] = useState([])
    const[eror, setError] = useState(false)
    
    useEffect(() => {async function getList(){
        try{
            const result = await getMovieList();
            setFilms(result)
        }catch (error){setError(true)}
    } getList() }, [])

    return(
        <div className={css.list}>
            <h2 className={css.text}>Trending films today</h2>
    <MovieList films={films}/>
    {eror && <ErrorMessage/>}
    </div>
    )
}
export default HomePage;