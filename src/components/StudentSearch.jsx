function StudentSearch({ searchQuery, onSearchChange, totalCount, filteredCount }) {
  return (
    <div className="toolbar">
      <div className="search-box">
        <label htmlFor="student-search" className="sr-only" style={{ display: "none" }}>
          Search students by name
        </label>
        <input
          id="student-search"
          type="text"
          className="search-input"
          placeholder="Search student by name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
          >
            Clear
          </button>
        )}
      </div>

      <span className="result-meta">
        Showing {filteredCount} of {totalCount}
      </span>
    </div>
  );
}

export default StudentSearch;