'use client'
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
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
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
const list = [
    {
        img: a4,
        title: 'FXCM',
        isRegular: 'Regular',
        rank: 9.46,
        year: 'Above 20 years',
        no: 1
    },
    {
        img: a2,
        title: 'XM',
        isRegular: 'Regular',
        rank: 9.03,
        year: '10-20 years',
        no: 2
    },
    {
        img: a6,
        title: 'STARTRADER',
        isRegular: 'Regular',
        rank: 9.03,
        year: '10-15 years',
        no: 3
    },
    {
        img: a7,
        title: 'GO MARKETS',
        isRegular: 'Regular',
        rank: 8.46,
        year: '10-15 years',
        no: 4
    },
    {
        img: a1,
        title: 'IC MARKETS',
        isRegular: 'Regular',
        rank: 9.46,
        year: '10-15 years',
        no: 5
    },
    {
        img: a8,
        title: 'TRADE NATION',
        isRegular: 'Regular',
        rank: 9.46,
        year: '10-15 years',
        no: 6
    },
    {
        img: a9,
        title: 'FX TRADING.com',
        isRegular: 'Regular',
        rank: 9.46,
        year: 'Above 20 years',
        no: 7
    },
    {
        img: a10,
        title: 'HYCM',
        isRegular: 'Regular',
        rank: 9.46,
        year: 'Above 20 years',
        no: 8
    }
];

const list1 = [
    {
        img: img6,
        title: '"admtrades.com is a scammer company" User Alleged',
        disc: 'Are you aware that there is a platform where you can file a complaint against any broker who has committed fraud against you? WiKiFX is a space where you can seek help and file a complaint against any broker, as this victim from India did.',
        check: 'Exposure',
        dateTime: '2024-02-02 15:58',
        id:1,
        no:1,
    },
    {
        img: img7,
        title: 'WITHDRAWAL PENDING',
        disc: 'I have been waiting for 12 hours the withdrawal. On system still in review. Normally the withdrawal does not take so much time. then suddenly I found this app to check whether is legit or not',
        check: 'Exposure',
        dateTime: '2024-02-03 08:06',
        id:2,
        no:2,
    },
    {
        img: img8,
        title: 'New! From TeraFX to Gildencrest Capital!',
        disc: 'TeraFX rebranded itself as Gildencrest Capital, emphasizing a strategic shift while reassuring clients of unchanged service quality, and announcing notable financial performance and expansion plans.',
        check: 'News',
        dateTime: '2024-02-02 15:54',
        id:3,
        no:3,
    },
    {
        img: img9,
        title: 'US Targets Belarusian-Cypriot in Crypto Exchange Case',
        disc: 'A Belarusian individual faces legal troubles, charged with money laundering conspiracy and operating an unlicensed money services business, allegedly overseeing the notorious BTC-e digital currency exchange.',
        check: 'News',
        dateTime: '2024-02-02 15:06',
        id:4,
        no:4,
    },
    {
        img: img10,
        title: 'Beware of unauthorised Brokers',
        disc: 'All of us agree that being aware is the most important thing we can do to avoid becoming victims. Being alert can help us protect our finances. To protect your hard-earned money. Here we are telling you from which unlicensed brokers you must stay away from.',
        check: 'News',
        dateTime: '2024-02-02 14:43',
        id:5,
        no:5,
    },
    {
        img: img11,
        title: 'US Dept. of Justice Arrests BTC-e Operator for Cybercrimes',
        disc: 'Belarusian-Cypriot Aliaksandr Klimenka arrested for running BTC-e, a digital exchange linked to cybercrime, in a major international law enforcement effort.',
        check: 'News',
        dateTime: '2024-02-02 14:19',
        id:6,
        no:6,
    },

]




const HomePageComp2 = () => {
    const [bgCol, setBgCol] = useState(false);
    const [col, setCol] = useState(false);
    const [num, setNum] = useState(false);
 

    const mouseHoverHandler = () => {
        setBgCol(true);
        setCol(true);
    }

    const mouseOutHandler = () => {
        setBgCol(false)
        setCol(false)
    };

    
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
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
                                            <EmojiEventsIcon sx={{ color: col == true ? 'black' : 'lightgray', }} />

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

                            <Grid container sx={{ mt: '10px', bgcolor: 'white' }}>
                                {
                                    list.map((ele, index) => {
                                        return (
                                            <Grid key={index} item xs={12} sx={{ p: '10px 0px', '&:hover': { bgcolor: '#f5f5f5' } }}>
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
                                                                <Box sx={{ display: 'flex', width: '80px' }}>
                                                                    <Box sx={{ position: 'relative', }}>
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
                                                                <Box sx={{ border: '1px solid lightgrey', width: '90px', mt: '4px' }}>
                                                                    <Typography sx={{ fontSize: '12px', textAlign: 'center', color: '#bdbdbd' }}>{ele.year}</Typography>

                                                                </Box>

                                                            </Grid>
                                                            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                                <Box sx={{ width: '17px', height: '22px', bgcolor: '#eeeeee', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>
                                                                    <Typography sx={{ color: '#bdbdbd', fontSize: '12px' }}>{ele.no}</Typography>
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
                            <Grid container sx={{ mt: '2px' }}>
                                <Grid item xs={12} >
                                    {
                                        list1.map((ele) => {
                                            // console.log(ele)
                                            return (
                                                <Grid container sx={{ p: '10px', bgcolor: 'white', border: '1px solid #f5f5f5', m: '10px 0px' }} component={Paper} elevation={0} >
                                                    <Grid item xs={12}  >
                                                        <Grid container>
                                                            <Grid item xs={3} >
                                                                <Box sx={{ width: '200px', height: '105px', }}>
                                                                    <Image src={ele.img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3px' }}alt='img'/>
                                                                </Box>


                                                            </Grid>

                                                            <Grid item xs={9} sx={{ pl: '7px' }}>
                                                                <Typography sx={{ fontSize: '16px', fontWeight: 'bold',color:'black','&:hover':{color:'#b28936'}}}>{ele.title}</Typography>
                                                                <Typography sx={{ color: '#9e9e9e', fontSize: '14px', mt: '6px' }}>{ele.disc.slice(0,170)}</Typography>

                                                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '8px', }}>
                                                                    <Grid item xs={1.3} >

                                                                        {
                                                                            ele.check == 'News' ?
                                                                                <Box sx={{ border: '1px solid orange' }}>
                                                                                    <Typography sx={{ textAlign: 'center', color: 'orange', fontSize: '13px' }}>{ele.check}</Typography>
                                                                                </Box> :
                                                                                <Box sx={{ border: '1px solid #039be5' }}>
                                                                                    <Typography sx={{ textAlign: 'center', color: '#039be5', fontSize: '13px' }}>{ele.check}</Typography>
                                                                                </Box>
                                                                        }



                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Typography sx={{ color: '#9e9e9e', fontSize: '12px', mt: '6px' }}>{ele.dateTime}</Typography>
                                                                    </Grid>
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

                        </Grid>
                    </Grid>
                    <Grid container sx={{p:'10px 0px', justifyContent:'space-between', alignItems:'center'}}>
                        <Grid item xs={3} >
                            <Typography sx={{fontSize:'23px', fontWeight:'bold', fontFamily:'inherit', color:'#3d3d3d'}}>Rights Protection Center</Typography>
                        </Grid>
                        <Grid item xs={5} sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                        
                            <Typography sx={{ textAlign: 'center', color:'#9e9e9e','&:hover':{color:'#212121'} }}>Unable to widthdraw</Typography>
                            <Typography sx={{ textAlign: 'center', color:'#9e9e9e','&:hover':{color:'#212121'} }}>Severe Slippage</Typography>
                            <Typography sx={{ textAlign: 'center', color:'#9e9e9e','&:hover':{color:'#212121'} }}>Scam</Typography>
                            <Typography sx={{ textAlign: 'center', color:'#9e9e9e','&:hover':{color:'#212121'} }}>Others</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                            <WestIcon sx={{fontSize:'20px', color:'#0277bd',mr:'10px'}}/>
                            <EastIcon sx={{fontSize:'20px', color:'#0277bd'}}/>
                        </Grid>
                    </Grid>

                    <Grid container sx={{p:'15px 10px', justifyContent:'space-between', alignItems:'center', background:'rgba(61,85,204,.03)', border:'1px solid rgba(61,85,204,.1)'}}>
                        <Grid item xs={4.5} sx={{border:'1px solid red'}}>
                            <Typography sx={{fontSize:'16px',  color:'#9e9e9e'}}>Amount resolved within one month(USD) <span style={{fontSize:'23px', color:'#3d3d3d', fontWeight:'bold'}}>$59,772,832</span> </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{border:'1px solid red', }}>
                        
                        <Typography sx={{fontSize:'16px',  color:'#9e9e9e'}}>Number of People Resolved <span style={{fontSize:'23px', color:'#3d3d3d', fontWeight:'bold'}}>14,425</span> </Typography>
                        </Grid>
                        <Grid item xs={2} sx={{border:'1px solid red', display:'flex', justifyContent:'right', alignItems:'center'}}>
                            
                           <Button sx={{bgcolor:'#3d55cc', color:'white',p:'9px 20px','&:hover':{bgcolor:'#3d55cc'}}}> <OfflineBoltOutlinedIcon sx={{fontSize:'18px',color:'white', mr:'6px'}}/><Typography sx={{fontSize:'13px', textTransform: 'capitalize'}}>Exposure</Typography></Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default HomePageComp2