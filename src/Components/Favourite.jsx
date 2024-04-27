import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import FavouriteImg1 from '../assets/favourite1.png'
import FavouriteImg2 from '../assets/favourite2.png'


function Favourite() {
    return (
        <div id='favourite'>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {/* heading */}
                <Grid xs={12}>
                    <Typography fontWeight={900} sx={{ fontSize: { xs: 25, sm: 32 }, margin: { xs: "20px 25px 30px 25px", sm: "20px 161px 30px 161px" },paddingTop:"69px"  }} className='favouriteHeading' variant="h1">Young's Favourite
                    </Typography>
                </Grid>
                {/* cards */}
                <Grid xs={12} sx={{margin: { xs: "40px 25px 30px 25px", sm: "40px 161px 30px 161px" }, padding: 0 }}>
                    {/* division of card grid */}
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {/* 1st card */}
                        <Grid item xs={12} md={6}>
                          {/*card  */}
                            <Card data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" sx={{ bgcolor: '#00000000', boxShadow: 0, padding: '0 10px', borderRadius: '9px' }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="100%" image={FavouriteImg1} alt="Image" />
                                    <CardContent>
                                        <Typography className='cardHeading' gutterBottom variant="body1" component="div" style={{ fontWeight: '500', fontFamily: "Poppins" }}>
                                        Trending on Instagram
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary" style={{ marginTop: "10px", color: "#7f7f7f", fontWeight: "500", fontFamily: "Poppins" }}>
                                            Explore now!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        {/* 2nd card */}
                        <Grid item xs={12} md={6}>
                            {/*card  */}
                            <Card data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" sx={{ bgcolor: '#00000000', boxShadow: 0, padding: '0 10px', borderRadius: '9px' }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="100%" image={FavouriteImg2} alt="Image" />
                                    <CardContent>
                                        <Typography className='cardHeading' gutterBottom variant="body1" component="div" style={{ fontWeight: '500', fontFamily: "Poppins" }}>
                                        Trending on Instagram
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary" style={{ marginTop: "10px", color: "#7f7f7f", fontWeight: "500", fontFamily: "Poppins" }}>
                                            Explore now!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Favourite
