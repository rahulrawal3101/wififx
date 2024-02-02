'use client'
import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarsIcon from '@mui/icons-material/Stars';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TokenIcon from '@mui/icons-material/Token';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import a2 from '../assets/a2.png';
import a4 from '../assets/a4.png';
import vr1 from '../assets/vr1.png';
import a1 from '../assets/a1.jpg';
import a10 from '../assets/a10.png';
import a6 from '../assets/a6.jpg';
import a7 from '../assets/a7.jpg';
import a8 from '../assets/a8.png';
import a9 from '../assets/a9.jpg';
import img1 from '../assets/img1.png';

const list = [
    {
        img:a4,
        title:'FXCM',
        isRegular:'Regular',
        rank:9.46,
        year:'Above 20 years',
        no:1
    },
    {
        img:a2,
        title:'XM',
        isRegular:'Regular',
        rank:9.03,
        year:'10-20 years',
        no:2
    },
    {
        img:a6,
        title:'STARTRADER',
        isRegular:'Regular',
        rank:9.03,
        year:'10-15 years',
        no:3
    },
    {
        img:a7,
        title:'GO MARKETS',
        isRegular:'Regular',
        rank:8.46,
        year:'10-15 years',
        no:4
    },
    {
        img:a1,
        title:'IC MARKETS',
        isRegular:'Regular',
        rank:9.46,
        year:'10-15 years',
        no:5
    },
    {
        img:a8,
        title:'TRADE NATION',
        isRegular:'Regular',
        rank:9.46,
        year:'10-15 years',
        no:6
    },
    {
        img:a9,
        title:'FX TRADING.com',
        isRegular:'Regular',
        rank:9.46,
        year:'Above 20 years',
        no:7
    },
    {
        img:a10,
        title:'HYCM',
        isRegular:'Regular',
        rank:9.46,
        year:'Above 20 years',
        no:8
    }
];




const HomePageComp2 = () => {
    const [bgCol, setBgCol] = useState(false);
    const [col, setCol] = useState(false);
    const [num, setNum] = useState(false)

    const mouseHoverHandler = () => {
        setBgCol(true);
        setCol(true);
        


    }

    const mouseOutHandler = () => {
        setBgCol(false)
        setCol(false)
    }
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                <Grid item xs={10}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                        <Grid item xs={3.9} sx={{ border: '5px solid #F1E7D4', }}>
                            <Grid container sx={{ bgcolor: '#fafafa' }}>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={3.4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', p: '10px 14px', bgcolor: 'white' }}>
                                            <EmojiEventsIcon />
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Rankings</Typography>


                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: bgCol == true ? '#eeeeee' : '' }} onMouseOver={mouseHoverHandler} onMouseOut={mouseOutHandler}>
                                            <EmojiEventsIcon sx={{ color:col == true ?'black': 'lightgray', }} />

                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarsIcon sx={{ color: 'lightgray', '&:hover': { color: 'black' } }} />

                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <LocalFireDepartmentIcon sx={{ color: 'lightgray', '&:hover': { color: 'black' } }} />

                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <TokenIcon sx={{ color: 'lightgray', '&:hover': { color: 'black' } }} />

                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <DangerousIcon sx={{ color: 'lightgray', '&:hover': { color: 'black' } }} />

                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>

                            {/* map comp  */}

                            <Grid container sx={{ mt: '10px' ,bgcolor:'white'}}>
                                {
                                    list.map((ele,index)=>{
                                        return (
                                            <Grid key={index} item xs={12} sx={{   p:'10px 0px','&:hover':{bgcolor:'#f5f5f5'}}}>
                                            <Grid container >
                                                <Grid item xs={5} sx={{ height: '77px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Box component={Paper} sx={{ width: '80%', height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', }}>
                                                        <Image src={ele.img} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                        <Box sx={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'left', alignItems: 'flex-start' }}>
                                                            <Box sx={{ width: '60px', bgcolor: '#4caf50', }}>
                                                                <Typography sx={{ textAlign: 'center', fontSize: '12px', color: 'white' }}>{ele.isRegular}</Typography>
                                                            </Box>
        
                                                        </Box>
                                                        <Box sx={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'right', alignItems: 'flex-end', }}>
                                                            <Box sx={{ width: '23px', borderRadius: '7px 0px 5px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: '4px' }}>
                                                                <Image src={vr1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                            </Box>
        
                                                        </Box>
        
                                                    </Box>
        
                                                </Grid>
                                                <Grid item xs={7} >
                                                    <Grid container >
                                                        <Grid item xs={10} >
                                                            <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: '#212121' }}>{ele.title}</Typography>
                                                            <Box sx={{  display: 'flex', width: '80px' }}>
                                                                <Box sx={{ position: 'relative',}}>
                                                                    <Box sx={{ position: 'relative', zIndex: 1 }}> {/* Ensure this box is above the yellow box */}
                                                                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#212121', zIndex: 9999999 }}>{ele.rank}</Typography>
                                                                    </Box>
                                                                    <Box sx={{ borderRadius: '10px', position: 'absolute', height: '10px', bgcolor: '#fc6', width: '100%', height: '30%', bottom: '17%', zIndex: 0 }}> {/* Ensure this box is behind the text */}
                                                                    </Box>
                                                                </Box>
                                                                <Box sx={{ ml: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Typography sx={{ fontSize: '11px', color: '#9e9e9e' }}>Score</Typography>
                                                                </Box>
                                                            
                                                            </Box>
                                                            <Box sx={{border:'1px solid lightgrey',width: '80px', mt:'4px'}}>
                                                                    <Typography sx={{fontSize:'11px',textAlign:'center', color:'#9e9e9e'}}>{ele.year}</Typography>
        
                                                                </Box>
        
                                                        </Grid>
                                                        <Grid item xs={2} sx={{display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
                                                            <Box sx={{width:'17px', height:'22px', bgcolor:'#eeeeee',display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'4px'}}>
                                                                <Typography sx={{color:'#bdbdbd', fontSize:'12px'}}>{ele.no}</Typography>
                                                            </Box>
        
                                                        </Grid>
                                                    </Grid>
        
                                                </Grid>
                                            </Grid>
        
                                        </Grid>
                                        )
                                    })
                                }
                               
                            </Grid>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item xs={8} sx={{ display: 'flex', ml: '4px' }}>
                                    <Grid container>
                                        <Grid item xs={1.8} sx={{ p: '10px 0px', borderBottom: '3px solid black' }}>
                                            <Typography sx={{ textAlign: 'center', fontSize: '17px', fontWeight: 'bold' }}>Latest</Typography>
                                        </Grid>
                                        <Grid item xs={1.9} sx={{ p: '10px 0px', }}>
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Original</Typography>
                                        </Grid>
                                        <Grid item xs={1.9} sx={{ p: '10px 0px', }}>
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Industry</Typography>
                                        </Grid>
                                        <Grid item xs={1.7} sx={{ p: '10px 0px', }}>
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Brokers</Typography>
                                        </Grid>
                                        <Grid item xs={1.9} sx={{ p: '10px 0px', }}>
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Exposure</Typography>
                                        </Grid>
                                        <Grid item xs={2.7} sx={{ p: '10px 0px', }}>
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>WifiFx Survey</Typography>
                                        </Grid>


                                    </Grid>


                                </Grid>
                                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                    <Typography sx={{ color: '#616161', fontSize: '15px' }}>More</Typography>
                                    <ChevronRightIcon sx={{ color: '#757575' }} />


                                </Grid>
                            </Grid>
                            <Grid container sx={{mt:'7px'}}>
                                <Grid item xs={12} >
                                    <Grid container sx={{ p:'10px', bgcolor:'white'}} component={Paper}>
                                       <Grid item xs={12} >
                                        <Grid container>
                                            <Grid item xs={3} >
                                                <Box sx={{width:'200px', height:'100px', }}>
                                                <Image src={img1} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'3px'}}/>
                                                </Box>


                                            </Grid>

                                            <Grid item xs={9} >
                                                <Typography sx={{fontSize:'16px', fontWeight:'bold'}}>Salient Features of IND-BUDGET 2024</Typography>
                                                <Typography sx={{color:'#9e9e9e',fontSize:'14px', mt:'6px'}}>The Finance Minister of India, Nirmala Sitharaman, presented an interim budget for FY 2024–2025 on February 1, 2024. The government has attempted to focus on every aspect.</Typography>
                                               
                                            <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mt:'5px'}}>
                                                <Grid item xs={2}>
                                                    <Box sx={{border:'1px solid orange'}}>
                                                        <Typography sx={{textAlign:'center', color:'orange'}}>News</Typography>
                                                    </Box>

                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Typography sx={{color:'#9e9e9e',fontSize:'12px', mt:'6px'}}>2024-02-02 11:57</Typography>
                                                </Grid>
                                            </Grid>

                                            </Grid>

                                        </Grid>

                                       </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default HomePageComp2