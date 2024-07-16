import { url } from "../(home)/page";

async function getMovie(id:string){
	const resp = await fetch(`${url}/${id}`)
	return resp.json()
}

export default async function MovieInfo({id}:{id:string}){
	const movieInfo = await getMovie(id)
	return <div>{JSON.stringify(movieInfo)}</div>
}