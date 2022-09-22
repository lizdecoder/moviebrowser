import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=efe60e66715a5ae61731510afd84e504&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      const noPosterUrl =
        "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg";

      if (movieDetails.poster_path===null) {
        return (
          <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={noPosterUrl}
                    alt={movieDetails.original_title}
                    className="img-fluid shadow rounded"
                  />
                </div>
                <div className="col-md-9">
                  <h2>{movieDetails.original_title}</h2>
                  <p className="lead">{movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </>
        );
      }

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt={movieDetails.original_title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
