import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <>
      {/* <Paper
        component="form"
         className="search-box"
        onSubmit={onhandleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "red" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper> */}
         <Paper
        component="form"
        class="search-box"
        onSubmit={onhandleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      > 
        <input
          type="text"
          // placeholder=" "
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "red" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        {/* <button type="reset"></button> */}
      </Paper>
    </>
  );
};

export default SearchBar;
