import * as React from 'react';
import { Grid, Box, Paper } from "@mui/material";


export default function Advertise() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12} display='flex' justifyContent='center'  >
                    <Paper elevation={0} sx={{
                        maxWidth: { md: '166px', xs: '100%' },
                        width: '100%',
                        display: { md: 'block', xs: 'flex' }, justifyContent: 'space-around'
                        , gap: '1rem'
                    }}>
                        <Box pb={2} >  <img src='https://www.wowpaper.com.tw/images_up/home/home_img_4_3.jpg' /></Box>
                        <Box pb={2} ><img src='https://www.wowpaper.com.tw/images_up/home/home_img_5_3.jpg' /></Box>


                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}