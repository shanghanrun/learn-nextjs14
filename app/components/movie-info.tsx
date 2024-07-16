import { url } from "../(home)/page";

async function getMovie(id:string){
	const resp = await fetch(`${url}/${id}`)
	const json = await resp.json()
	return json;
}

export default async function MovieInfo({id}:{id:string}){
	const movieInfo = await getMovie(id)
	return <div>{JSON.stringify(movieInfo)}</div>
}