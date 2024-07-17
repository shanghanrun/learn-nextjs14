// "use client"
import { url } from "../../../../(home)/page";
import Movie from "../../../../components/movie";
import styles from './movie-similar.module.css'
// import { useRouter } from 'next/router'



async function getSimilarMovies(id:string){
	const resp = await fetch(`${url}/${id}/similar`)
	return resp.json()
}
export default async function SimilarMovies({params:{id},}){
	// const router = useRouter()
	// const {id} = router.query as { id: string }; // 타입 지정;
	console.log('id: ', id)
	const similarMovies = await getSimilarMovies(id);
	return (
		<div className={styles.container}>
			{similarMovies.map(movie => (
				<Movie 
					key={movie.id} 
					id={movie.id}
					poster_path={movie.poster_path}
					title ={movie.title}
					/>
			))}
		</div>
	)
}