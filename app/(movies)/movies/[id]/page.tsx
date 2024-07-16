import { Suspense } from "react"
import { url } from "../../../(home)/page"
import MovieInfo from "../../../components/movie-info"
import MovieVideos from "../../../components/movie-videos"



export default async function MovieDetail({params:{id},}){
	
	return (
		<div>
			<Suspense fallback={<h1>Loading movie info</h1>}>
				<MovieInfo id={id}/>
			</Suspense>
			<div>===================</div>
			<Suspense fallback={<h1>Loading movie videos</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	)
}