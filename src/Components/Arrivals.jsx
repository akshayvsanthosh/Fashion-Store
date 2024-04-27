import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../Styles/Arrivals.css'
import arrivalImg1 from '../assets/arrivals1.webp'
import arrivalImg2 from '../assets/arrivals2.webp'
import arrivalImg3 from '../assets/arrivals3.webp'




function Arrivals() {
    return (
        <div id='arrivals'>
            <Container maxWidth="sm">
                <Box  className="arrivalsBox" sx={{ padding:{xs:0, sm:"10px 74px"} }} >
                    <Stack spacing={2}>
                        {/* heading div */}
                        <div className='container ' style={{ marginBottom: "20px" }}>
                            {/* <h1 className='heading'>NEW ARRIVALS</h1> */}
                            <Typography fontWeight={900} sx={{ fontSize: { xs: 25, sm: 32 }, paddingLeft:0}} className='heading' variant="h1">NEW ARRIVALS
                            </Typography>
                        </div>
                        {/* card div */}
                        <Grid container spacing={2} sx={{ maxWidth: 940, margin: "10px" }}>
                            <Grid xs={12} sm={6} md={4}>
                                {/* 1st card */}
                                <Card data-aos="flip-left" data-aos-duration="3000" sx={{ bgcolor: '#00000000', boxShadow: 0, padding: '0 10px', borderRadius: '9px' }}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="100%" image={arrivalImg1} alt="Hoodies & Sweatshirt" />
                                        <CardContent>
                                            <Typography className='cardHeading' gutterBottom variant="body1" component="div"  style={{ fontWeight: '500', fontFamily: "Poppins" }}>
                                                Hoodies &amp;&nbsp;Sweatshirt
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" style={{ marginTop: "10px", color: "#7f7f7f", fontWeight: "500", fontFamily: "Poppins" }}>
                                                Explore now!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                {/* 2nd card */}
                                <Card data-aos="flip-right" data-aos-duration="3000" sx={{ bgcolor: '#00000000', boxShadow: 0, padding: '0 10px', borderRadius: '9px' }}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="100%" image={arrivalImg2} alt="Hoodies & Sweatshirt" />
                                        <CardContent>
                                            <Typography className='cardHeading' gutterBottom variant="body1" component="div" style={{ fontWeight: '500', fontFamily: "Poppins" }}>
                                                Coats & Parkas
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" style={{ marginTop: "10px", color: "#7f7f7f", fontWeight: "500", fontFamily: "Poppins" }}>
                                                Explore now!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                {/* 3rd card */}
                                <Card data-aos="flip-left" data-aos-duration="3000" sx={{ bgcolor: '#00000000', boxShadow: 0, padding: '0 10px', borderRadius: '9px' }}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="100%" image={arrivalImg3} alt="Hoodies & Sweatshirt" />
                                        <CardContent>
                                            <Typography className='cardHeading' gutterBottom variant="body1" component="div" style={{ fontWeight: '500', fontFamily: "Poppins" }}>
                                                Tees & T-Shirt
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" style={{ marginTop: "10px", color: "#7f7f7f", fontWeight: "500", fontFamily: "Poppins" }}>
                                                Explore now!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>


                    </Stack>
                </Box>


            </Container>
        </div>
    )
}

export default Arrivals
