import "./SearchBar.css"; // Import the CSS file for styling
function SearchBar({ inputValue, handleChange, handleClick, isEditing }) {
  return (
    <div className="wrapper">
      {isEditing ? (
        <div className="input">
          <input type="text" value={inputValue} onChange={handleChange} />
        </div>
      ) : (
        <div className="v-align">
          <div className="inline">{inputValue}</div>
        </div>
      )}
      <div className="center">
        <span onClick={handleClick} className="button">
          <span className="v-align">Search</span>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
