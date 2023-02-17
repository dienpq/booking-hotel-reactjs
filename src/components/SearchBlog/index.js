import { styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function SearchBlog(props) {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        marginRight: theme.spacing(0),
        marginLeft: 0,
        width: '100%'
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(TextField)(({ theme }) => ({
        color: 'inherit',
        width: '100%',

        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 2, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
        },
    }));
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#9e9e9e' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}

export default SearchBlog;