'use client'
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarsIcon from '@mui/icons-material/Stars';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TokenIcon from '@mui/icons-material/Token';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HomePageComp2 = () => {
    const [bgCol, setBgCol] = useState(false)

    const mouseHoverHandler = () => {
        setBgCol(true)

    }

    const mouseOutHandler=()=>{
        setBgCol(false)
    }
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#fafafa',pt:'20px' }}>
                <Grid item xs={10}>
                    <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center', }}>
                        <Grid item xs={3.9} sx={{ border: '4px solid #b28936', }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={3.4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', p: '10px 14px', bgcolor: 'white' }}>
                                            <EmojiEventsIcon />
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Rankings</Typography>


                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor:bgCol == true ? 'red':''}} onMouserOver={mouseHoverHandler} onMouseOut={mouseOutHandler}>
                                            <EmojiEventsIcon sx={{ color: 'lightgray', '&:hover': { color: 'black' } }} />

                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarsIcon sx={{ color: 'lightgray', '&:hover': { color: 'black' } }} />

                                        </Grid>
                                        <Grid item xs={1.72} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <LocalFireDepartmentIcon sx={{ color: 'lightgray' , '&:hover': { color: 'black' }}} />

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

                        </Grid>
                        <Grid item xs={8} sx={{  }}>
                            <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <Grid item xs={8} sx={{display:'flex'}}>
                                    <Grid container>
                                    <Grid item xs={1.8} sx={{ p:'10px',borderBottom:'3px solid black'}}>
                                        <Typography sx={{textAlign:'center', fontSize:'17px', fontWeight:'bold'}}>Latest</Typography>
                                    </Grid>
                                    <Grid item xs={1.9} sx={{p:'10px', }}>
                                        <Typography sx={{textAlign:'center', color:'#bdbdbd', '&:hover':{color:'black'}}}>Original</Typography>
                                    </Grid>
                                    <Grid item xs={1.9} sx={{p:'10px',}}>
                                        <Typography sx={{textAlign:'center' ,color:'#bdbdbd','&:hover':{color:'black'}}}>Industry</Typography>
                                    </Grid>
                                    <Grid item xs={1.7} sx={{ p:'10px',}}>
                                        <Typography sx={{textAlign:'center', color:'#bdbdbd','&:hover':{color:'black'}}}>Brokers</Typography>
                                    </Grid>
                                    <Grid item xs={1.9} sx={{ p:'10px',}}>
                                        <Typography sx={{textAlign:'center', color:'#bdbdbd','&:hover':{color:'black'}}}>Exposure</Typography>
                                    </Grid>
                                    <Grid item xs={2.7} sx={{ p:'10px',}}>
                                        <Typography sx={{textAlign:'center', color:'#bdbdbd','&:hover':{color:'black'}}}>WifiFx Survey</Typography>
                                    </Grid>
                                   
                                   
                                    </Grid>
                                   

                                </Grid>
                                <Grid item xs={3} sx={{ display:'flex', justifyContent:'right', alignItems:'center'}}>
                                    <Typography sx={{color:'#616161', fontSize:'15px'}}>More</Typography>
                                    <ChevronRightIcon sx={{color:'#757575'}}/>


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