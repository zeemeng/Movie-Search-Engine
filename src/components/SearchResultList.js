import SearchResultItem from "./SearchResultItem";
import classes from "./SearchResultList.module.css";

function SearchResultList(props) {
  const queryResultMovieEntries = props.queryResult ? props.queryResult.results : [];

  return props.madeNoSearch ? (
    <div className={`container ${classes.searchResultsPlaceholder}`}>Search now to find flicks that you'll love.</div>
  ) : queryResultMovieEntries.length === 0 ? (
    <div className={`container ${classes.searchResultsPlaceholder}`}>No result has been found.</div>
  ) : (
    <div className={`container ${classes.searchResults}`}>
      {queryResultMovieEntries.map(movieEntry => (
        <SearchResultItem key={movieEntry.id} movieEntry={movieEntry} />
      ))}
    </div>
  );
}

export default SearchResultList;
