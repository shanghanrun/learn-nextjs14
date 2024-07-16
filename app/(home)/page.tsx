// "use client"
// import {useEffect} from 'react';
// import countStore from '../store/countStore';
import Link from "next/link";

export const metadata={ 
	title:"Home",
};
export const url ='https://nomad-movies.nomadcoders.workers.dev/movies'
async function getMovies(){
	await new Promise((resolve)=> setTimeout(resolve,1000))
	const resp = await fetch(url)
	const json = await resp.json()
	return json;
}


// 클라이언트 컴포넌트
// function ClientComponent(){
// 	const { count, addCount, setCount } = countStore();

// 	return (
// 		<div>
// 			<h1>{count}</h1>
// 			<button onClick={addCount}>Increase</button>
// 		</div>
// 	)

// }


export default async function Home(){
	const movies = await getMovies();
	return (
    	<div>
     	 {movies.map(movie=><li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.id} : {movie.title}</Link></li>)}
    	</div>
		// <div>
		// 	<ClientComponent />
		// </div>
 	);
}