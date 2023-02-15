import { MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

function SelectBlog(props) {
    const SelectBox = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(0),
        marginLeft: 0,
        width: '100%',
    }));

    const SelectCustom = styled(Select)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiSelect-select': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: '1rem',
        }
    }));

    const [age, setAge] = useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <SelectBox>
            <SelectCustom
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={1}>Phòng / Đêm</MenuItem>
                <MenuItem value={2}>Tổng giá</MenuItem>
            </SelectCustom>
        </SelectBox>
    );
}

export default SelectBlog;