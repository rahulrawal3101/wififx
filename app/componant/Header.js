'use client'
import { AppBar, Box, Button, Grid, InputBase, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    return (
        <>
            <AppBar sx={{ bgcolor: '#263238', p: '0px' }}>
                <Toolbar sx={{ p: '10px' }}>
                    <Grid container>
                        <Grid item xs={5.2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: '180px', height: '43px', position: 'relative', ml: '20px' }}>

                                <Image src={logo} fill />
                            </Box>
                            <Typography sx={{ fontSize: '17px', color: '#78909c', ml: '20px', }}>Global Broker governance & inquiry<br /> App</Typography>

                        </Grid>
                        <Grid item xs={6.8} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '370px', border: '1px solid white', bgcolor: 'white', display: 'flex', p: '7px', justifyContent: 'space-between', alignItems: 'center', borderRadius: '25px', ml: '20px' }}>
                                <InputBase placeholder='Please enter the name of the broker..' sx={{ width: '80%' }} />
                                <Box sx={{ width: '42px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px', bgcolor: '#b28936' }}>
                                    <SearchIcon sx={{ fontSize: '29px', color: 'white', }} />

                                </Box>

                            </Box>
                            <Box sx={{ ml: '20px' }}>
                                <Box sx={{ width: '40px', height: '40px', border: '0.5px solid #fafafa', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <PersonIcon sx={{ color: '#eeeeee', fontSize: '26px' }} />
                                </Box>

                            </Box>
                            <Box sx={{ ml: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button sx={{ border: '1px solid lightgrey', p: '8px 12px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', '&:hover': { bgcolor: '#455a64' } }}>
                                    <LanguageIcon sx={{ fontSize: '15px', color: '#f5f5f5', mr: '4px' }} />
                                    <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: '#f5f5f5' }}>English</Typography>
                                    <KeyboardArrowDownIcon sx={{ fontSize: '22px', color: '#f5f5f5', ml: '3px' }} />

                                </Button>

                                <Button sx={{ bgcolor: '#fc6', p: '9px 12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', ml: '10px', '&:hover': { bgcolor: '#fc6', } }}>
                                    <CloudDownloadIcon sx={{ fontSize: '16px', color: '#263238', mr: '4px' }} />
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#263238' }}>Download</Typography>
                                </Button>
                            </Box>

                        </Grid>
                    </Grid>

                </Toolbar>
                <Grid container sx={{ bgcolor: '#fc6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={10} sx={{ height:'50px', display: 'flex', justifyContent:'space-between', alignItems:'center' }}>
                                <Box sx={{  p: '0px 7px', borderRadius:'10px', backgroundColor:'transparent',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'} }}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>Home</Typography>
                                </Box>

                                <Box sx={{  p: '0px 7px', borderRadius:'10px', backgroundColor:'transparent',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'} }}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>Broker</Typography>
                                </Box>

                                <Box sx={{  p: '0px 7px', borderRadius:'10px', backgroundColor:'transparent',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'} }}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>Ranking List</Typography>
                                </Box>


                                <Box sx={{  p: '0px 7px', display:'flex', justifyContent:'space-between', alignItems:'center', borderRadius:'10px' ,'&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'}}}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>VPS</Typography>
                                    <KeyboardArrowDownIcon sx={{ fontSize: '20px', color: 'red',color:'#5c2016' }} />
                                </Box>


                                <Box sx={{  p: '0px 7px', borderRadius:'10px', backgroundColor:'transparent',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'} }}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>Live</Typography>
                                </Box>

                                <Box sx={{  p: '0px 7px', borderRadius:'10px', backgroundColor:'transparent',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'} }}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>Discover</Typography>
                                </Box>


                                <Box sx={{ p: '0px 7px' , display:'flex', justifyContent:'space-between', alignItems:'center', borderRadius:'10px',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'}}}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>Exposure</Typography>
                                    <KeyboardArrowDownIcon sx={{ fontSize: '20px', color: 'red',color:'#5c2016' }} />
                                </Box>

                                <Box sx={{  p: '0px 7px', display:'flex', justifyContent:'space-between', alignItems:'center', borderRadius:'10px',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'} }}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>News</Typography>
                                    <KeyboardArrowDownIcon sx={{ fontSize: '20px', color: 'red',color:'#5c2016' }} />
                                </Box>

                                <Box sx={{p: '0px 7px', borderRadius:'10px',  '&:hover':{background:'rgba(0,0,0,0.15)', backgroundBlendMode:'multiply',cursor:'pointer'} }}>

                                    <Typography sx={{color:'#5c2016',  fontSize:'18px'}}>WikiExpo</Typography>
                                </Box>





                            </Grid>
                            <Grid item xs={2} sx={{  display:'flex', justifyContent:'right', alignItems:'center'}}>
                                <MenuIcon sx={{fontSize:'28px', color:'#5c2016'}}/>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </AppBar>
        </>
    )
}

export default Header