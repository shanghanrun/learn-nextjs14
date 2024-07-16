import { url } from "../(home)/page";

async function getVideos(id:string){
	const resp = await fetch(`${url}/${id}/videos`)
	return resp.json()
}
export default async function MovieVideos({id}:{id:string}){
	const videos = await getVideos(id);
	return <div>{JSON.stringify(videos)}</div>
}