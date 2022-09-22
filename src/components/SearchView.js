import Hero from "./Hero";
// import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  const noPosterUrl =
    "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg";

  if (movie.poster_path===null) {
    return (
      <>
        <div className="col-lg-3 col-md-3 col-2 my-4">
          <div className="card">
            <img
              src={noPosterUrl}
              className="card-img-top"
              alt="missing poster_path"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.original_title}</h5>
              <a href={detailUrl} className="btn btn-primary">
                Show Details
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <a href={detailUrl} className="btn btn-primary">
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  if (searchResults.length === 0 && keyword !== "") {
    return (
      <>
        <Hero text={title} />
        <h1 className="pt-5 ps-5">
          Unfortunately your search did not yield any results.
        </h1>
        <p className="ps-5">Please edit your search and try again.</p>
      </>
    );
  }

  return (
    <>
      <Hero text={title} />
      {resultsHTML && (
        <div className="container">
          <div className="row">{resultsHTML}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
