import { Grid, Typography } from '@mui/material'
import React from 'react'
import payDayImg from "../assets/payday.webp"

function PayDay() {
    return (
        <div>
            <Grid container>
                {/* image grid */}
                <Grid  item xs={12} md={6} sx={{ bgcolor: '#f1d54d' }}>
                    <img  width={'100%'} src={payDayImg} alt="IMAGE" />
                </Grid>
                {/* text grid */}
                <Grid item xs={12} md={6} sx={{ bgcolor: '#f1d54d' }}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sx={{  margin:'0px' }}>
                            <Typography fontWeight={900} sx={{fontSize:{xs:28, sm:72, md:45, lg:72 }, padding:{xs:"30px 0px 0px 5px", sm:"30px 0px 0px 40px"}}}  className='payDayHeading' variant="h1">
                               <span className='payDayHeading1'> PAYDAY</span>      
                                <span className='payDayHeading2'>SALE NOW</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography sx={{fontSize:{xs:17, sm:24 }}} className='payDayPara' variant="body1">Spend minimal $100 get 30% offvoucher code for your next purchase      </Typography>
                            <Typography fontWeight={'bold'} sx={{fontSize:{xs:17, sm:24 }}} className='payDayPara' variant="body1">
                                June - 10 June 2021 <br/>
                                <span className='payDayParaSpan'>*Terms & Conditions apply</span>
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default PayDay
