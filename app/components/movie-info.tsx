import Link from "next/link";
import { url } from "../(home)/page";
import styles from './movie-info.module.css'

export async function getMovie(id:string){
	const resp = await fetch(`${url}/${id}`)
	return resp.json()
}

export default async function MovieInfo({id}:{id:string}){
	const movie = await getMovie(id)
	return <div className={styles.container}>
		<img className={styles.poster} src={movie.poster_path} alt={movie.title}/>
		<div className={styles.info}>
			<h1 className={styles.title}>{movie.title}</h1>
			<h3>⭐{movie.vote_average.toFixed(1)}</h3>
			<p>{movie.overview}</p>
			<img src={movie.production_companies[0]?.logo_path} alt='' width='100px'/>
			<a href={movie.homepage} target={"_blank"}>HomePage &rarr;</a>
			<Link href={`/movies/${id}/movie-similar`}>유사 영화들</Link>

		</div>
	</div>
}