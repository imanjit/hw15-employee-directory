import React from "react";

const Search = (data) => {
    return (
        <form className="m-4">
        <div className="input-group">
          <input
            onChange={data.handleChange}
            value={data.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
            />
          <div className="input-group-append">
          <button className="btn btn-secondary">
            Search
          </button>
          </div>
        </div>
      </form>
    )
};


export default Search;