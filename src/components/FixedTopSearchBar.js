import classes from "./FixedTopSearchBar.module.css";
import SearchBar from "./SearchBar";

function FixedTopSearchBar(props) {
  return (
    <div className={classes.searchBarFrame}>
      <SearchBar
        searchMovie={props.searchMovie}
        searchTerm={props.searchTerm}
        setSearchTerm={props.setSearchTerm}
        classList={`container ${classes.searchBar}`}
      />
    </div>
  );
}

export default FixedTopSearchBar;
