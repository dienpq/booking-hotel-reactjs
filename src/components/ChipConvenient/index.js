import { Box, Chip, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


function ChipConvenient(props) {
    return (
        <Chip
            label={<Box display='flex' alignItems='center'>
                <AutoAwesomeIcon sx={{ fontSize: '14px' }} />
                <Typography variant="caption" marginTop='2px' marginLeft='4px' fontWeight='600'>
                    Miễn phí hủy phòng
                </Typography>
            </Box>}
            sx={{
                bgcolor: '#e8f5e9',
                color: '#4caf50',
                height: 'auto',
                padding: '2px'
            }}
        />
    );
}

export default ChipConvenient;