import styles from '../../styles/home.module.css'
import Movie from '../components/movie';
import {url} from '../constants/constants'

export const metadata={ 
	title:"Home",
};


async function getMovies(){
	const resp = await fetch(url)
	return await resp.json()
}

export default async function Home(){
	const movies = await getMovies();
	return (
    	<div className={styles.container}>
     	 {movies.map(movie=><Movie 
		 	key={movie.id} 
			id={movie.id}
			poster_path={movie.poster_path}
			title ={movie.title}
			/>)}
    	</div>
 	);
}