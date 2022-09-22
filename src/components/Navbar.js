import { useHistory } from "react-router-dom";
import { useRef } from 'react';

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();
  const searchRef = useRef(searchText)

  const handleSearch = () => {
    history.push("/search");
    const searchedItem = searchRef.current.value
    setSearchText(searchedItem)
  }
  

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Movie Browser
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Coming soon
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={searchRef}
            />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}> 
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
