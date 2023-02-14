import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function QuantityForm(props) {
    return (
        <Box display='flex'>
            <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }}>
                <RemoveIcon fontSize='small' />
            </Button>
            <Box
                width='30.4px'
                height='30.4px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                border='1px solid rgba(25, 118, 210, 0.5)'
                color='#1976d2' borderRadius='4px'
                marginLeft='4px'
                marginRight='4px'
            >
                0
            </Box>

            <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }} disabled>
                <AddIcon fontSize='small' />
            </Button>
        </Box>
    );
}

export default QuantityForm;