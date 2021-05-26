import React from 'react';
import withContext from '../withContext';

const SearchBar = ({ value, submit, change }) => {
  return (
    <>
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={submit}>
          <div className="field">
            <label>Weather Search</label>
            <input
              type="text"
              value={value}
              placeholder="Enter City"
              onChange={change}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default withContext(SearchBar);
