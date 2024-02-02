'use client'
import { Box, Button, Grid, InputBase, Paper, Typography } from '@mui/material';
import React from 'react';
import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
import a4 from '../assets/a4.png';
import a5 from '../assets/a5.png';
import a6 from '../assets/a6.jpg';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

const newArr = [
    {
        img: a1
    },
    {
        img: a2
    },
    {
        img: a3
    },
    {
        img: a4
    },
    {
        img: a5
    },
    {
        img: a6
    },
]

const HomePageComp1 = () => {
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#fafafa' }}>
                <Grid item xs={10} sx={{mt: '132px' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '25px', mb: '10px' }}>
                        {
                            newArr.map((ele, index) => {
                                return (
                                    <Grid key={index} item xs={1.8} sx={{ height: '90px', bgcolor: 'white', borderRadius: '10px', }}>
                                        <Box component={Paper} elevation={0.1} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', '&:hover': { border: '1px solid red' } }}>
                                            <Image src={ele.img} style={{ width: '80%', height: '100%', objectFit: 'cover' }} />
                                            <Box sx={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'right', alignItems: 'flex-end' }}>
                                                <Box sx={{ width: '30px', bgcolor: '#039be5', borderRadius: '7px 0px 5px 0px' }}>
                                                    <Typography sx={{ textAlign: 'center', fontSize: '12px', color: 'white' }}>AD</Typography>
                                                </Box>

                                            </Box>

                                        </Box>


                                    </Grid>
                                )
                            })
                        }

                    </Grid>


                </Grid>

                <Grid item xs={10} sx={{ p: '40px 0px 25px 0px'}}>
                    <Typography sx={{ fontSize: '43px', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>Global Broker governance & inquiry App!</Typography>
                    <Box>
                        <Typography sx={{color:'#b28936', fontSize:'25px',textAlign: 'center', mt:'15px', fontFamily:'sans-serif', }}>53648 <span style={{color:'#bdbdbd', fontSize:'20px'}}>brokers enlisted. Collaborating with </span>60 <span style={{color:'#bdbdbd', fontSize:'20px'}}>regulators</span></Typography>
                        
                    </Box>

                </Grid>

                <Grid item xs={10} sx={{  p: '10px 0px 10px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
                    <Box sx={{ width: '75%', border: '3px solid #b28936', height: '55px', bgcolor: 'white', p: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <SearchIcon sx={{ fontSize: '30px', color: 'lightgrey', ml: '10px' }} />
                        <InputBase placeholder='Please enter the name of the broker for inquiries' sx={{ width: '82%', fontSize: '20px', }} />
                        <Button sx={{ bgcolor: '#b28936', color: 'white', p: ' 15px 28px', fontWeight: 'bold' }}>Search</Button>

                    </Box>
                </Grid>
                <Grid item xs={10} sx={{ p: '10px',  display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
                    <Box sx={{ borderRight: '1px solid lightgrey', width: '100px' }}>
                        <Typography sx={{ textAlign: 'center', color:'#9e9e9e', '&:hover':{color:'#212121'} }}>J.P.Morgan</Typography>
                    </Box>
                    <Box sx={{ borderRight: '1px solid lightgrey', width: '80px' }}>
                        <Typography sx={{ textAlign: 'center', color:'#9e9e9e', '&:hover':{color:'#212121'}  }}>FXCM</Typography>
                    </Box>
                    <Box sx={{ borderRight: '1px solid lightgrey', width: '170px' }}>
                        <Typography sx={{ textAlign: 'center', color:'#9e9e9e','&:hover':{color:'#212121'} }}>Titan Capital Market</Typography>
                    </Box>
                    <Box sx={{ borderRight: '1px solid lightgrey', width: '70px' }}>
                        <Typography sx={{ textAlign: 'center', color:'#9e9e9e', '&:hover':{color:'#212121'} }}>XM</Typography>
                    </Box>
                    <Box sx={{ borderRight: '1px solid lightgrey', width: '90px' }}>
                        <Typography sx={{ textAlign: 'center', color:'#9e9e9e', '&:hover':{color:'#212121'} }}>Exness</Typography>
                    </Box>
                    <Box sx={{ borderRight: '1px solid rlightgreyed', width: '80px' }}>
                        <Typography sx={{ textAlign: 'center', color:'#9e9e9e', '&:hover':{color:'#212121'} }}>Octa</Typography>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}

export default HomePageComp1