import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles, { functionalStyles } from '../utils/styles';

const Selector = () => {

    const pages = ['All', 'Cases', 'Stickers', 'Autographs', 'Music Kits'];

    return (
            <Box component='nav' sx={styles.BoxRow}>
                {pages.map((i,j) => (
                    <Typography key={j} sx={functionalStyles.SelectorCard(j === 0, i === 'Cases')}>
                        {i}  
                    </Typography>
                ))}
            </Box>
    )
}

export default Selector;