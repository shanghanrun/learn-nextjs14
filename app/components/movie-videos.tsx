import { url } from '../constants/constants'; 
import styles from './movie-videos.module.css'

async function getVideos(id:string){
	const resp = await fetch(`${url}/${id}/videos`)
	return resp.json()
}
export default async function MovieVideos({id}:{id:string}){
	const videos = await getVideos(id);
	return (
		<div className={styles.container}>
			{videos.map(video => (
				<iframe 
					key={video.id} 
					src={`https://youtube.com/embed/${video.key}`} 
					title={video.name}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          			allowFullScreen
					/>
			))}
		</div>
	)
}