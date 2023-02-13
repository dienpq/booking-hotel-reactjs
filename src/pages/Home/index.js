import { Box } from '@mui/system';
import React from 'react';
import Banner from '../../assets/banner.png';
import SearchRoom from '../../components/SearchRoom';
import styles from './Home.module.scss';

function Home() {
    return (
        <Box sx={{ mt: '50px' }} position='relative'>
            <div className={styles.boxBanner}>
                <img src={Banner} className={styles.banner} />
            </div>
            <SearchRoom />
        </Box>
    );
}

export default Home;