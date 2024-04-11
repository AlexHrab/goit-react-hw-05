import { MovieList } from "../../components/MovieList/MovieList"
import css from './HomePage.module.css'

function HomePage(){
    return(
        <div className={css.list}>
            <h2 className={css.text}>Trending films today</h2>
    <MovieList/>
    </div>
    )
}

export default HomePage;