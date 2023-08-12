import { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Card.css"
import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap"

const Cards = ({ movie }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>

        {/* <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link> */}
         <Col sm="4" md="3" lg="2">
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <Card
               
            >
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <CardBody>
                    <CardTitle tag="h5">
                    {movie?movie.original_title:""}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {movie?movie.vote_average:""}
                    </CardSubtitle>
                    <CardText>
                    {movie ? movie.overview.slice(0,118)+"..." : ""}
                    </CardText>
                    
                </CardBody>
            </Card>
            </Link>
        </Col> 

    </>
}

export default Cards