import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"

/*
    영화 상세 정보 노출 
    userParam으로 받아온 id값을 이용해 api 요청
*/

function Detail() {
const [loading, setLoading] = useState(true);
const [movie, setMovie] = useState();    
const {id} = useParams()
const getMoive = async () => {
    const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();  
    setLoading(false)
    setMovie(json.data.movie)
};
useEffect(() => {    
    getMoive()
}, []);
    return (
        <div>
        {loading? (<h1>Loading...</h1>) : (
        <div>    
        <h1>Detail</h1>
        <img alt={movie.title} src={movie.large_cover_image}></img>
        <p>{movie.description_full}</p>
        </div>  
        )}
        </div>
    )  
}

export default Detail;