'use client'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import rlogo from '../assets/rlogo.jpg';
import Image from 'next/image';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import nz from '../assets/nz.png';
import indo from '../assets/indo.png';
import singa from '../assets/singa.png';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import yellow from '../assets/yellow.png';
import blue from '../assets/blue.png';
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import fbs from '../assets/fbs.png';
import express from '../assets/express.png';
import xm from '../assets/xm.png';
import fxtm from '../assets/fxtm.png';
import gmi from '../assets/gmi.png';
import forex from '../assets/forex.png';
import avatrade from '../assets/avatrade.png';
import pepperstone from '../assets/pepperstone.png';
import thinkmarket from '../assets/thinkmarket.png';
import fxcm from '../assets/fxcm.png';
import a1 from '../assets/a1.jpg';
import a6 from '../assets/a6.jpg';
import a4 from '../assets/a4.png';
import a11 from '../assets/a11.jpg';
import a7 from '../assets/a7.jpg';
import a2 from '../assets/a2.png';
import phone from '../assets/phone.png';

const imgData = [
    {
        img: a1,
        isRegular: 'Regular',
        name: 'IC Markets'
    },
    {
        img: a6,
        isRegular: 'Regular',
        name: 'STAR TRADER'
    },
    {
        img: a4,
        isRegular: 'Regular',
        name: 'FXCM'
    },
    {
        img: a11,
        isRegular: 'Regular',
        name: 'IC Markets'
    },
    {
        img: a7,
        isRegular: 'Regular',
        name: 'FOREX'
    },
    {
        img: a2,
        isRegular: 'Regular',
        name: 'XM'
    }
]

const bdyTable = [
    {
        logo: forex,
        name: 'FOREX.com',
        acc: 'Standard',
        buy: 1.0987,
        sell: 1.1233,
        spread: 1.4,
        avgSpdday: 1.38,
        lgPtionLot: 0.00,
        StPtionLot: 0.00
    },
    {
        logo: avatrade,
        name: 'AvaTrade',
        acc: 'Standard',
        buy: 1.0987,
        sell: 1.1233,
        spread: 1.4,
        avgSpdday: 1.38,
        lgPtionLot: 0.00,
        StPtionLot: 0.00
    },
    {
        logo: pepperstone,
        name: 'Pepperstone',
        acc: 'Standard',
        buy: 1.0987,
        sell: 1.1233,
        spread: 1.4,
        avgSpdday: 1.38,
        lgPtionLot: 0.00,
        StPtionLot: 0.00
    },
    {
        logo: thinkmarket,
        name: 'ThinkMarket',
        acc: 'Standard',
        buy: 1.0987,
        sell: 1.1233,
        spread: 1.4,
        avgSpdday: 1.38,
        lgPtionLot: 0.00,
        StPtionLot: 0.00
    },
    {
        logo: fxcm,
        name: 'FXCM',
        acc: 'Standard',
        buy: 1.0987,
        sell: 1.1233,
        spread: 1.4,
        avgSpdday: 1.38,
        lgPtionLot: 0.00,
        StPtionLot: 0.00
    }
]


const arrData = [
    {
        logo: rlogo,
        titlt1: 'BCR Support',
        title2: '30m',
        title3: 'Looking for Experienced IBs',
        isIb: 'IB'
    },
    {
        logo: rlogo,
        titlt1: 'BCR Support',
        title2: '30m',
        title3: 'Looking for Experienced IBs',
        isIb: 'IB'
    },
    {
        logo: rlogo,
        titlt1: 'BCR Support',
        title2: '30m',
        title3: 'Looking for Experienced IBs',
        isIb: 'IB'
    },
    {
        logo: rlogo,
        titlt1: 'BCR Support',
        title2: '30m',
        title3: 'Looking for Experienced IBs',
        isIb: 'IB'
    },
    {
        logo: rlogo,
        titlt1: 'BCR Support',
        title2: '30m',
        title3: 'Looking for Experienced IBs',
        isIb: 'IB'
    },
    {
        logo: rlogo,
        titlt1: 'BCR Support',
        title2: '30m',
        title3: 'Looking for Experienced IBs',
        isIb: 'IB'
    }
];

const arrData1 = [
    {
        logo1: logo1,
        title1: 'UBNZ',
        descT: "UBNZ's",
        decs: "New Zealand Office Address Not Found",
        img: img12,
        check: 'Danger',
        logo2: nz,
        name: 'New Zealand',
        date: '2019-10-17'
    },
    {
        logo1: logo2,
        title1: 'UBNZ',
        descT: "UBNZ's",
        decs: "New Zealand Office Address Not Found",
        img: img13,
        check: 'Danger',
        logo2: indo,
        name: 'Indonesia',
        date: '2019-10-17'
    },
    {
        logo1: logo3,
        title1: 'UBNZ',
        descT: "UBNZ's",
        decs: "New Zealand Office Address Not Found",
        img: img14,
        check: 'Great',
        logo2: singa,
        name: 'Singapore',
        date: '2019-10-17'
    }
];

const arrData2 = [
    {
        input1: 'Tools',
        title: 'Immortality',
        input2: 'Income in last year',
        per: '+120.00%',
        input3: 'This tool is an indicator that can display the net value change graph of the account in historical time and the opening and closing positions and connection graphs of all historical orders.',
        usd: 'USD 0.99',
        del: 'USD 980.00',
    },
    {
        input1: 'Martin',
        title: 'ForexWorld',
        input2: 'Income in last year',
        per: '+115.90%',
        input3: "Martin's strategy is mainly used in symbol market, mainly used in small period and shock market, keep trading back and forth, adding up. ",
        usd: 'USD 0.99',
        del: 'USD 980.00',
    },
    {
        input1: 'Comprehensive type',
        title: 'Godness',
        input2: 'Income in last year',
        per: '+261.86%',
        input3: "Expect to enlarge the market;Even if the direction is wrong, you can set a stop loss.and you can solve the problem of inaccurate opening positions by adding several positions before the stop loss is reached.",
        usd: 'USD 0.99',
        del: 'USD 980.00',
    },
    {
        input1: 'Trend type',
        title: 'Aberration',
        input2: 'Income in last year',
        per: '+173.36%',
        input3: "This is a classic CTA strategy, similar to the band line strategy, which makes a trend market and breaks through the shock range to buy. If the market continues to go, it will hold it until it goes long, falls below the midline of the band line, or closes short and rises above the middle rail of the band line.",
        usd: 'USD 0.99',
        del: 'USD 980.00',
    }
];

const totalMargin = [
    {
        img: fbs,
        name: 'FBS',
        totalAssests: 26.18,
        rank: 1
    },
    {
        img: xm,
        name: 'XM',
        totalAssests: 66.78,
        rank: 1
    },
    {
        img: express,
        name: 'Express',
        totalAssests: 53.78,
        rank: 1
    },
    {
        img: fxtm,
        name: 'FXTM',
        totalAssests: 16.07,
        rank: 1
    },
    {
        img: gmi,
        name: 'GMI',
        totalAssests: 57.78,
        rank: 1
    },

];

const tableHead = ['Brokers', 'Accounts', 'Buy', 'Sell', 'Spread', 'Average spread/day', 'long Position Swap USD/Lot', 'Short Position Swap USD/Lot']



const HomePageCompo3 = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'flex-start', mt: '20px' }}>
                <Grid item xs={10} >
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid item xs={9}>
                            <Grid container sx={{ justifyContent: 'left', alignItems: 'center' }}>
                                <Grid item xs={1} >
                                    <Typography sx={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', fontFamily: 'serif', color: '#3D3D3D' }}>Discover</Typography>
                                </Grid>
                                <Grid item xs={1} >
                                    <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>IB</Typography>
                                </Grid>
                                <Grid item xs={1} >
                                    <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Payment</Typography>
                                </Grid>
                                <Grid item xs={2} >
                                    <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Sys building</Typography>
                                </Grid>
                                <Grid item xs={1} >
                                    <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>License</Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <Typography sx={{ color: '#616161', fontSize: '15px' }}>More</Typography>
                            <ChevronRightIcon sx={{ color: '#757575' }} />


                        </Grid>




                    </Grid>
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mt: '11px' }}>
                        {
                            arrData.map((ele, index) => {
                                return (
                                    <Grid item xs={3.8} sx={{ p: '20px 10px 70px 10px', m: '10px 0px', bgcolor: 'white', borderRadius: '4px', border: '1px solid #f5f5f5', '&:hover': { boxShadow: '1px 1px 10px 1px rgba(191,191,191,1)' } }} >
                                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'left' }}>
                                                <Box sx={{ width: '45px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image src={rlogo} style={{ width: '80%', height: '80%' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif' }}>{ele.titlt1}</Typography>
                                                    <Typography sx={{ color: '#9e9e9e' }}>{ele.title2}</Typography>
                                                </Box>

                                            </Grid>
                                            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'right' }}>
                                                <Button sx={{ color: 'orange', fontSize: '12px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>+ Follow</Button>

                                            </Grid>
                                        </Grid>
                                        <Box>
                                            <Typography sx={{ color: '#3d3d3d', fontSize: '17px', fontWeight: 'bold', mt: '5px', ml: '3px' }}>{ele.title3} <span style={{ color: 'orange' }}>#{ele.isIb}#</span></Typography>
                                        </Box>

                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                    <Grid container sx={{ mt: '4px' }}>
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>

                            <Grid item xs={5} sx={{}}>
                                <Typography sx={{ textAlign: 'left', fontSize: '22px', fontWeight: 'bold', fontFamily: 'serif', color: '#3D3D3D' }}>Field Survey</Typography>
                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                <Typography sx={{ color: '#616161', fontSize: '15px' }}>More</Typography>
                                <ChevronRightIcon sx={{ color: '#757575' }} />


                            </Grid>
                        </Grid>
                        <Grid container sx={{ mt: '10px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            {
                                arrData1.map((ele, index) => {
                                    return (
                                        <Grid key={index} item xs={3.8} sx={{ p: '15px', bgcolor: 'white', bgcolor: 'white', borderRadius: '4px', border: '1px solid #f5f5f5', '&:hover': { boxShadow: '1px 1px 10px 1px rgba(191,191,191,1)' } }}>
                                            <Grid container>
                                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                                    <Box sx={{ width: '20px', height: '20px', }}>
                                                        <Image src={ele.logo1} style={{ width: '100%', height: '100%' }} />
                                                    </Box>
                                                    <Box >
                                                        <Typography sx={{ fontFamily: 'serif', ml: '10px', color: '#3D3D3D' }}>{ele.title1}</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography sx={{ fontSize: '17px', color: '#3D3D3D', fontFamily: 'serif', fontWeight: 'bold', mt: '10px' }}><span style={{ fontWeight: 'bold', fontSize: '18px' }}>{ele.descT}</span> {ele.decs}</Typography>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <Box sx={{ width: '100%', height: '175px', position: 'relative', mt: '6px' }}>

                                                        <Image src={ele.img} style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
                                                        <Box sx={{ width: '80px', bgcolor: ele.check == 'Great' ? '#4db6ac' : '#b71c1c', position: 'absolute', top: '6px', left: '6px', borderRadius: '3px' }}>
                                                            <Typography sx={{ textAlign: 'center', color: 'white' }}>{ele.check}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '10px' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>

                                                        <Box sx={{ width: '30px', height: '17px' }}>
                                                            <Image src={nz} style={{ width: '100%', height: '100%', borderRadius: '2px' }} />
                                                        </Box>
                                                        <Typography sx={{ color: '#bdbdbd', fontSize: '14px', ml: '5px' }}>{ele.name}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: '#bdbdbd', fontSize: '17px' }}>{ele.date}</Typography>
                                                    </Box>
                                                </Grid>


                                            </Grid>

                                        </Grid>
                                    )
                                })
                            }

                        </Grid>

                        <Grid container >
                            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', p: '20px 0px 0px 0px' }}>
                                <Grid item xs={9}>
                                    <Grid container sx={{ justifyContent: 'left', alignItems: 'center', }}>
                                        <Grid item xs={1} >
                                            <Typography sx={{ textAlign: 'left', fontSize: '22px', fontWeight: 'bold', fontFamily: 'serif', color: '#3D3D3D' }}>EA</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Tools</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Martin</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Shock</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Trend</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Grid</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography sx={{ textAlign: 'center', color: '#bdbdbd', '&:hover': { color: 'black' } }}>Comprehensive</Typography>
                                        </Grid>

                                    </Grid>

                                </Grid>
                                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                    <Typography sx={{ color: '#616161', fontSize: '15px' }}>More</Typography>
                                    <ChevronRightIcon sx={{ color: '#757575' }} />


                                </Grid>




                            </Grid>
                            <Grid container sx={{ pb: '20px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Grid item xs={7.9} >
                                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        {
                                            arrData2.map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={5.8} sx={{ p: '15px', bgcolor: 'white', borderRadius: '4px', mt: '15px', border: '1px solid #f5f5f5', '&:hover': { boxShadow: '1px 1px 10px 1px rgba(191,191,191,1)' } }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                                            {
                                                                ele.input1 == 'Tools' || ele.input1 == 'Martin' ?
                                                                    <Box sx={{ bgcolor: ele.input1 == 'Tools' ? '#fbc02d' : '#9ccc65', borderRadius: '2px', p: '2px 7px' }}>
                                                                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '13px', fontWeight: 400 }}>{ele.input1}</Typography>
                                                                    </Box> : ''
                                                            }
                                                            {
                                                                ele.input1 == 'Comprehensive type' || ele.input1 == 'Trend type' ?
                                                                    <Box sx={{ bgcolor: ele.input1 == 'Comprehensive type' ? '#9575cd' : '#64b5f6', borderRadius: '2px', p: '2px 7px' }}>
                                                                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '13px', fontWeight: 400 }}>{ele.input1}</Typography>
                                                                    </Box> : ''
                                                            }

                                                            <Typography sx={{ fontSize: '22px', color: '#3D3D3D', fontWeight: 'bold', ml: '6px' }}>{ele.title}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', mt: '10px' }}>
                                                            <Typography sx={{ color: 'rgba(0,0,0,.5)', fontSize: '14px' }}>Income in last year</Typography>
                                                            <Typography sx={{ color: '#e66112', fontSize: '17px', ml: '5px', fontFamily: 'sans-serif', }}>{ele.per}</Typography>

                                                        </Box>

                                                        <Box sx={{ mt: '10px' }}>
                                                            <Typography sx={{ fontSize: '13px', color: '#ccc', mt: '10px' }}>{ele.input3.slice(0, 130)}...</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '7px' }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <Typography sx={{ fontSize: '20px', color: '#e66112', fontFamily: 'sans-serif', fontWeight: '600' }}>{ele.usd}</Typography>
                                                                <Typography sx={{ color: 'rgba(0,0,0,.5)', fontSize: '15px', ml: '5px' }}><del>{ele.del}</del></Typography>
                                                            </Box>
                                                            <Box sx={{ bgcolor: '#3b4858', display: 'flex', justifyContent: 'center', alignItems: 'center', p: '2px 10px', borderRadius: '3px' }}>
                                                                <ShoppingCartOutlinedIcon sx={{ color: 'white', fontSize: '13px', mr: '5px' }} />
                                                                <Typography sx={{ color: 'white', fontSize: '13px' }}>Purchase</Typography>
                                                            </Box>
                                                        </Box>

                                                    </Grid>
                                                )
                                            })
                                        }

                                    </Grid>

                                </Grid>

                                <Grid item xs={3.75} sx={{ p: '20px 15px', borderRadius: '4px', mt: '15px', bgcolor: 'white' }}>

                                    <Grid container sx={{ bgcolor: 'white', borderRadius: '3px' }}>
                                        <Grid item xs={12} sx={{ height: '180px', position: 'relative', borderRadius: '4px', bgcolor: 'rgba(178,137,54,.05)', border: '1px solid #f5f5f5', '&:hover': { boxShadow: '1px 1px 10px 1px rgba(191,191,191,1)' } }}>
                                            <Box sx={{ height: '100%', width: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>

                                                <Image src={yellow} style={{ width: '35%', height: '50%' }} />
                                            </Box>
                                            <Box sx={{ position: 'absolute', width: '100%', height: '100%', }}>
                                                <Grid container>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '4px' }}>
                                                        <ListIcon sx={{ fontSize: '35px', color: '#B38936', }} />
                                                        <Typography sx={{ fontSize: '21px', color: '#B38936', fontWeight: 'bold' }}>VPS Standard</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>CPU</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>1*CPU</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>Ram</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>1G</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>Harddisk</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>40G</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>Wideband</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>1M</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                            <Typography sx={{ fontSize: '20px', color: '#e66112', fontFamily: 'sans-serif', fontWeight: '600' }}>USD 0.10</Typography>
                                                            <Typography sx={{ color: 'rgba(0,0,0,.5)', fontSize: '15px', ml: '5px' }}>/ Month</Typography>
                                                        </Box>
                                                        <Box sx={{ bgcolor: '#B38936', display: 'flex', justifyContent: 'center', alignItems: 'center', p: '2px 10px', borderRadius: '3px' }}>
                                                            <ShoppingCartOutlinedIcon sx={{ color: 'white', fontSize: '13px', mr: '5px' }} />
                                                            <Typography sx={{ color: 'white', fontSize: '13px' }}>Purchase</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sx={{ height: '180px', position: 'relative', borderRadius: '4px', bgcolor: 'rgba(46,82,153,.05)', mt: '25px', border: '1px solid #f5f5f5', '&:hover': { boxShadow: '1px 1px 10px 1px rgba(191,191,191,1)' } }}>
                                            <Box sx={{ height: '100%', width: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>

                                                <Image src={blue} style={{ width: '35%', height: '50%', }} />
                                            </Box>
                                            <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
                                                <Grid container>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '4px' }}>
                                                        <ListIcon sx={{ fontSize: '35px', color: '#2E5299', }} />
                                                        <Typography sx={{ fontSize: '21px', color: '#2E5299', fontWeight: 'bold' }}>VPS Pro</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>CPU</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>1*CPU</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>Ram</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>1G</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>Harddisk</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>40G</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Typography sx={{ fontSize: '13px' }}>Wideband</Typography>
                                                        <Typography sx={{ fontSize: '13px' }}>1M</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 10px', mt: '3px' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                            <Typography sx={{ fontSize: '20px', color: '#e66112', fontFamily: 'sans-serif', fontWeight: '600' }}>USD 0.10</Typography>
                                                            <Typography sx={{ color: 'rgba(0,0,0,.5)', fontSize: '15px', ml: '5px' }}>/ Month</Typography>
                                                        </Box>
                                                        <Box sx={{ bgcolor: '#2E5299', display: 'flex', justifyContent: 'center', alignItems: 'center', p: '2px 10px', borderRadius: '3px' }}>
                                                            <ShoppingCartOutlinedIcon sx={{ color: 'white', fontSize: '13px', mr: '5px' }} />
                                                            <Typography sx={{ color: 'white', fontSize: '13px' }}>Purchase</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                            </Box>
                                        </Grid>
                                    </Grid>

                                </Grid>


                            </Grid>

                            <Grid container>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', borderBottom: '3px solid #3D3D3D' }}>
                                    <Typography sx={{ textAlign: 'left', fontSize: '22px', fontWeight: 'bold', fontFamily: 'serif', color: '#3D3D3D' }}>Ranking List</Typography>
                                    <Box sx={{ ml: '40px' }}>
                                        <KeyboardArrowLeftIcon sx={{ fontSize: '35px', color: '#3D3D3D' }} />
                                        <KeyboardArrowRightIcon sx={{ fontSize: '35px', color: '#3D3D3D', ml: '10px' }} />

                                    </Box>


                                </Grid>

                                {/* ranking list  */}
                                <Grid container sx={{ mt: '20px', mb: '20px', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                                    <Grid item lg={3.8} sx={{ p: '15px', bgcolor: 'white', border: '2px solid #f5f5f5' }}>
                                        <Typography sx={{ color: '#3D3D3D', fontSize: '16px', fontFamily: 'serif', fontWeight: 'bold' }}>Total Margin</Typography>

                                        <Grid container sx={{ mt: '10px' }}>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                                <Box sx={{ p: '4px 15px', bgcolor: 'white', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>30 days</Typography>
                                                </Box>
                                                <Box sx={{ p: '4px 15px', bgcolor: '#fafafa', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', color: '#a3a3a3' }}>90 days</Typography>
                                                </Box>
                                                <Box sx={{ p: '4px 15px', bgcolor: '#fafafa', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', color: '#a3a3a3' }}>6 months</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '10px' }}>
                                                <Box sx={{ ml: '8px' }}>
                                                    <Typography sx={{ fontSize: '13px', color: '#e0e0e0' }}>Brokerage</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                                        <Typography sx={{ fontSize: '13px', color: '#e0e0e0' }}>Total Assets%</Typography>
                                                        <Typography sx={{ fontSize: '13px', color: '#e0e0e0', ml: '20px' }}>Ranking</Typography>
                                                    </Box>

                                                </Box>

                                            </Grid>

                                            <Grid container >
                                                {
                                                    totalMargin.map((ele, index) => {
                                                        return (
                                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '17px' }}>
                                                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', }}>
                                                                    <Box sx={{ width: '20px', height: '20px', bgcolor: '#e8eaf6' }}>
                                                                        <Typography sx={{ fontSize: '12px', textAlign: 'center' }}>{index + 1}</Typography>
                                                                    </Box>

                                                                    <Box sx={{ width: '20px', height: '20px', ml: '10px' }}>
                                                                        <Image src={ele.img} style={{ width: '100%', height: '100%' }} />
                                                                    </Box>
                                                                    <Typography sx={{ fontSize: '15px', fontFamily: 'serif', ml: '7px' }}>{ele.name}</Typography>
                                                                </Box>
                                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                                                                        <Typography sx={{ fontSize: '17px', color: '#3d3d3d', fontWeight: 'bold', mr: '50px' }}>{ele.totalAssests}</Typography>
                                                                        <Typography sx={{ fontSize: '17px', color: '#e0e0e0', ml: '20px' }}>--</Typography>
                                                                    </Box>


                                                                </Box>

                                                            </Grid>
                                                        )
                                                    })
                                                }


                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={3.8} sx={{ p: '15px', bgcolor: 'white', border: '2px solid #f5f5f5' }}>
                                        <Typography sx={{ color: '#3D3D3D', fontSize: '16px', fontFamily: 'serif', fontWeight: 'bold' }}>Active Trading Ranking</Typography>

                                        <Grid container sx={{ mt: '10px' }}>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                                <Box sx={{ p: '4px 15px', bgcolor: 'white', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>30 days</Typography>
                                                </Box>
                                                <Box sx={{ p: '4px 15px', bgcolor: '#fafafa', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', color: '#a3a3a3' }}>90 days</Typography>
                                                </Box>
                                                <Box sx={{ p: '4px 15px', bgcolor: '#fafafa', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', color: '#a3a3a3' }}>6 months</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '10px' }}>
                                                <Box sx={{ ml: '8px' }}>
                                                    <Typography sx={{ fontSize: '13px', color: '#e0e0e0' }}>Brokerage</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                                        <Typography sx={{ fontSize: '13px', color: '#e0e0e0' }}>Total Assets%</Typography>
                                                        <Typography sx={{ fontSize: '13px', color: '#e0e0e0', ml: '20px' }}>Ranking</Typography>
                                                    </Box>

                                                </Box>

                                            </Grid>

                                            <Grid container >
                                                {
                                                    totalMargin.map((ele, index) => {
                                                        return (
                                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '17px' }}>
                                                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', }}>
                                                                    <Box sx={{ width: '20px', height: '20px', bgcolor: '#e8eaf6' }}>
                                                                        <Typography sx={{ fontSize: '12px', textAlign: 'center' }}>{index + 1}</Typography>
                                                                    </Box>

                                                                    <Box sx={{ width: '20px', height: '20px', ml: '10px' }}>
                                                                        <Image src={ele.img} style={{ width: '100%', height: '100%' }} />
                                                                    </Box>
                                                                    <Typography sx={{ fontSize: '15px', fontFamily: 'serif', ml: '7px' }}>{ele.name}</Typography>
                                                                </Box>
                                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                                                                        <Typography sx={{ fontSize: '17px', color: '#3d3d3d', fontWeight: 'bold', mr: '50px' }}>{ele.totalAssests}</Typography>
                                                                        <Typography sx={{ fontSize: '17px', color: '#e0e0e0', ml: '20px' }}>--</Typography>
                                                                    </Box>


                                                                </Box>

                                                            </Grid>
                                                        )
                                                    })
                                                }


                                            </Grid>
                                        </Grid>

                                    </Grid>


                                    <Grid item xs={3.8} sx={{ p: '15px', bgcolor: 'white', border: '2px solid #f5f5f5' }}>
                                        <Typography sx={{ color: '#3D3D3D', fontSize: '16px', fontFamily: 'serif', fontWeight: 'bold' }}>Total lots</Typography>

                                        <Grid container sx={{ mt: '10px' }}>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                                <Box sx={{ p: '4px 15px', bgcolor: 'white', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>30 days</Typography>
                                                </Box>
                                                <Box sx={{ p: '4px 15px', bgcolor: '#fafafa', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', color: '#a3a3a3' }}>90 days</Typography>
                                                </Box>
                                                <Box sx={{ p: '4px 15px', bgcolor: '#fafafa', border: '1px solid #eeeeee' }}>
                                                    <Typography sx={{ fontSize: '15px', color: '#a3a3a3' }}>6 months</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '10px' }}>
                                                <Box sx={{ ml: '8px' }}>
                                                    <Typography sx={{ fontSize: '13px', color: '#e0e0e0' }}>Brokerage</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                                        <Typography sx={{ fontSize: '13px', color: '#e0e0e0' }}>Total Assets%</Typography>
                                                        <Typography sx={{ fontSize: '13px', color: '#e0e0e0', ml: '20px' }}>Ranking</Typography>
                                                    </Box>

                                                </Box>

                                            </Grid>

                                            <Grid container >
                                                {
                                                    totalMargin.map((ele, index) => {
                                                        return (
                                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '17px' }}>
                                                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', }}>
                                                                    <Box sx={{ width: '20px', height: '20px', bgcolor: '#e8eaf6' }}>
                                                                        <Typography sx={{ fontSize: '12px', textAlign: 'center' }}>{index + 1}</Typography>
                                                                    </Box>

                                                                    <Box sx={{ width: '20px', height: '20px', ml: '10px' }}>
                                                                        <Image src={ele.img} style={{ width: '100%', height: '100%' }} />
                                                                    </Box>
                                                                    <Typography sx={{ fontSize: '15px', fontFamily: 'serif', ml: '7px' }}>{ele.name}</Typography>
                                                                </Box>
                                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                                                                        <Typography sx={{ fontSize: '17px', color: '#3d3d3d', fontWeight: 'bold', mr: '50px' }}>{ele.totalAssests}</Typography>
                                                                        <Typography sx={{ fontSize: '17px', color: '#e0e0e0', ml: '20px' }}>--</Typography>
                                                                    </Box>


                                                                </Box>

                                                            </Grid>
                                                        )
                                                    })
                                                }


                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Grid>


                            {/* Real time spred  */}

                            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Grid item xs={7.9} >
                                    <Grid container sx={{ borderBottom: '3px solid #3d3d3d', p: '0px 0px 9px 0px' }}>
                                        <Grid item xs={8}>
                                            <Typography sx={{ textAlign: 'left', fontSize: '22px', fontWeight: 'bold', fontFamily: 'serif', color: '#3D3D3D' }}>Real-time spread comparison <span>EURUSD</span></Typography>

                                        </Grid>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: '17px', color: '#3d3d3d', mr: '20px' }}>Tradings Pairs</Typography>

                                            <FormControl sx={{ width: '130px', bgcolor: 'white' }} size='small'>

                                                <Select>
                                                    <MenuItem value={'EURUSD'}>EURUSD</MenuItem>
                                                    <MenuItem value={'USDJPY'}>USDJPY</MenuItem>
                                                    <MenuItem value={'HBHAVU'}>HBHAVU</MenuItem>
                                                    <MenuItem value={'UPYHGG'}>UPYHGG</MenuItem>
                                                </Select>
                                            </FormControl>

                                        </Grid>
                                    </Grid>

                                    {/* table  */}
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <TableContainer>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow >
                                                            {
                                                                tableHead.map((ele, index) => {
                                                                    return (
                                                                        <TableCell key={index}>
                                                                            <Box sx={{ width: '120px' }}>
                                                                                <Typography sx={{ fontSize: '14px', color: '#ccc', textAlign: 'center' }}>{ele}</Typography>
                                                                            </Box>
                                                                        </TableCell>
                                                                    )
                                                                })
                                                            }




                                                        </TableRow>


                                                    </TableHead>
                                                    <TableBody>
                                                        {
                                                            bdyTable.map((ele, index) => {
                                                                return (
                                                                    <TableRow>

                                                                        <TableCell sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                                                            <Box sx={{ width: '20px', height: '20px', }}>
                                                                                <Image src={ele.logo} style={{ width: '100%', height: '100%' }} />
                                                                            </Box>
                                                                            <Typography sx={{ ml: '5px', fontSize: '15px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>{ele.name}</Typography>


                                                                        </TableCell>
                                                                        <TableCell sx={{ color: '#7a7a7a', fontSize: '16px', textAlign: 'center' }}>{ele.acc}</TableCell>
                                                                        <TableCell sx={{ color: '#7a7a7a', fontSize: '16px', textAlign: 'center', color: '#d32f2f', }}>{ele.buy}</TableCell>
                                                                        <TableCell sx={{ color: '#7a7a7a', fontSize: '16px', textAlign: 'center', color: 'green' }}>{ele.sell}</TableCell>
                                                                        <TableCell sx={{ color: '#7a7a7a', fontSize: '16px', textAlign: 'center' }}>{ele.spread}</TableCell>
                                                                        <TableCell sx={{ color: '#7a7a7a', fontSize: '16px', textAlign: 'center' }}>{ele.avgSpdday}</TableCell>
                                                                        <TableCell sx={{ color: '#7a7a7a', fontSize: '16px', textAlign: 'center' }}>{ele.lgPtionLot}</TableCell>
                                                                        <TableCell sx={{ color: '#7a7a7a', fontSize: '16px', textAlign: 'center' }}>{ele.StPtionLot}</TableCell>
                                                                    </TableRow>
                                                                )


                                                            })
                                                        }


                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item xs={3.75} sx={{ p: '10px', bgcolor: 'white' }}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'serif', color: '#3D3D3D' }}>WifiFX Broker</Typography>
                                        </Grid>
                                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            {
                                                imgData.map((ele) => {
                                                    return (
                                                        <Grid item xs={5.5} sx={{ position: 'relative', border: '1px solid #bdbdbd', borderRadius: '6px', mt: '13px', '&:hover': { border: '1px solid orange' } }}>
                                                            <Box sx={{ height: '85px', }}>
                                                                <Image src={ele.img} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />

                                                            </Box>
                                                            <Box sx={{ bgcolor: '#fafafa', borderRadius: '0px 0px 8px 8px' }}>
                                                                <Typography sx={{ fontSize: '17px', color: '#3d3d3d', textAlign: 'center' }}>{ele.name}</Typography>
                                                            </Box>
                                                            <Box sx={{ p: '0px 4px', bgcolor: '#66bb6a', width: '50px', position: 'absolute', top: '0px', borderRadius: '5px 0px 0px 0px' }}>
                                                                <Typography sx={{ fontSize: '11px', color: 'white', textAlign: 'center' }}>{ele.isRegular}</Typography>
                                                            </Box>

                                                        </Grid>
                                                    )
                                                })
                                            }

                                        </Grid>
                                    </Grid>


                                </Grid>

                            </Grid>


                            {/* last part  */}
                            <Grid container sx={{ border: '1px solid red', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Grid item xs={7.9} sx={{ border: '1px solid green', mt: '60px' }}>
                                    <Typography sx={{ fontSize: '27px', color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}>To view more</Typography>
                                    <Typography sx={{ fontSize: '40px', color: '#b38936', fontStyle: 'italic', fontWeight: '800' }}>Please download WikiFX APP</Typography>
                                    <Typography sx={{ fontSize: '22px', color: 'black', fontStyle: 'italic', }}>Know More and Enjoy more</Typography>


                                    <Grid container>
                                        <Grid item xs={5}>

                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item xs={3.75} sx={{ border: '1px solid green' }}>
                                <Box sx={{wiidth:'90%',height:'80%',}}>
                                <Image src={phone} style={{width:'100%',height:'100%'}}/>
                                </Box>

                                </Grid>

                            </Grid>


                        </Grid>


                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default HomePageCompo3