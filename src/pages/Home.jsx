import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loading from "../components/Loading";
import Advertise from "../components/Advertise";
import { Box, Grid } from '@mui/material';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import {
    NavLink,
} from 'react-router-dom';

export default function Home() {

    const [listData, setListData] = useState([]);
    const [barry, setListBarry] = useState([]);
    useEffect(() => {
        fetch('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
            .then(res => res.json())
            .then(result => {
                let array = []
                let Barry = []
                for (let index = 0; index < 28; index++) {
                    array.push(result.data.XML_Head.Infos.Info[index])
                }
                for (let index = 0; index < 6; index++) {
                    Barry.push(result.data.XML_Head.Infos.Info[index])
                }
                setListData(array)
                setListBarry(Barry)
            })
    }, [])

    return <div className="container">
        <Box my={1} >
            {/* <Carousel showArrows={true} autoPlay={true} centerMode={false} showThumbs={false} showStatus={false}>
                <div>
                    <img alt='' src="https://www.wowpaper.com.tw/images_up/home/home_img_28_1.jpg" />
                </div>
                <div>
                    <img alt='' src="https://www.wowpaper.com.tw/images_up/home/home_img_39_1.jpg" />
                </div>
                <div>
                    <img alt='' src="https://www.wowpaper.com.tw/images_up/home/home_img_41_1.jpg" />
                </div>
                <div>
                    <img alt='' src="https://www.wowpaper.com.tw/images_up/home/home_img_1_1.jpg" />
                </div>
                <div>
                    <img alt='' src="https://www.wowpaper.com.tw/images_up/home/home_img_27_1.jpg" />
                </div>
            </Carousel> */}
        </Box>
        {/*home-about */}
        <Box className="home-about">

            <Box display='flex' flexDirection={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                <NavLink to="/" className='largeA-w'>
                    <p>??????????????????????????????</p>
                </NavLink>
                <Box display='flex' mt={2}
                // sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }}
                >
                    <p>?????????????????????????????????????????????</p>
                </Box>
            </Box>
        </Box>
        {/*search*/}
        <div className="home-search">

            <input type="text" />   <button >
                ????????????
            </button>
        </div>
        {/* ????????? */}
        <Grid container sx={{ backgroundColor: '#fff' }}>
            <Grid item xs={12} sm={9} md={9} lg={9} p={1}>
                {listData.length ? (
                    <ul className="product-list-wrapper">
                        {listData.map((item) => {
                            return (
                                <li key={item.Id}>
                                    <Link to={item.Id}>
                                        <img src={item.Picture1} alt={item.Name} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                ) : <Loading />
                }
                <Box display={'flex'} justifyContent={'flex-end'} mt={1}>
                    <button >
                        ???????????? {'>>'}
                    </button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}
                display='flex' flexDirection='column'
                p={1}
            >
                <Advertise></Advertise>
            </Grid>
        </Grid>
        <Box className="contact">
            <img alt='' src="https://www.wowpaper.com.tw/images/lineC.png" />
            <img alt='' src="https://www.wowpaper.com.tw/images/fbC.png" />
        </Box>

        <Grid container sx={{ backgroundColor: '#fff' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} p={1}>
                {barry.length ? (
                    <ul className="rssNews">
                        {barry.map((item) => {
                            return (
                                <li key={item.Id}>
                                    <Box mb={.5}>
                                        <Link to={item.Id}>
                                            <img src={item.Picture1} alt={item.Name} />
                                        </Link>
                                    </Box>
                                    <p>[ ????????????????????? ] ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                </li>
                            )
                        })}
                    </ul>
                ) : <Loading />
                }

            </Grid>

        </Grid>

        <Box className="footer">

            <Box display='flex' flexDirection={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', gap: '.5rem' }}>
                WOWPAPER LTD., Taiwan All Rights Reserved.
                <Box display='flex'
                // sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }}
                >
                    ?????????????????????32???40-3???1??? 02-2577-8566
                </Box>
            </Box>
        </Box>
    </div>;
};