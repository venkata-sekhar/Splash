import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import "./Components.css";

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <Paper component="form" onSubmit={handleSubmit} sx={{
            borderRadius: 20,
            border: "1px solid black",
            pl: 2,
            // boxShadow: "none",
            mr: { sm: 5 }
        }}>
            <input className='search-bar' placeholder='Type Something...' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
            <IconButton type="submit" sx={{ p: "10px", backgroundColor: "white" }}>
                <SearchIcon sx={{backgroundColor:"white",color:"black"}} />        
            </IconButton>
        </Paper>
    )
}