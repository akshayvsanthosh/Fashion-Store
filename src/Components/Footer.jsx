import { Grid, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

function Footer() {
    return (
        <div id='Footer'>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} bgcolor={'#e5c643'} padding={'80px 0px'} className='d-flex flex-column align-items-center '>
                    <Typography fontWeight={900} sx={{ fontSize: { xs: 25, md: 32 }, margin: { xs: "90px 25px 30px 25px", md: "90px 161px 30px 161px" }, padding: 0 }} className='footerHead' variant="h1">JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
                    </Typography>
                    <Typography className='footerPara' variant="body1" sx={{fontSize:{xs:13 ,sm:24}, fontFamily: "Poppins" }}>
                    Type your email down below and be young wild generation
                    </Typography>
                    <TextField sx={{bgcolor:"#fff", borderRadius:"5px",marginTop:5}} id="outlined-basic" label="Email" variant="outlined" />
                    <p style={{marginTop:"83px", marginBottom:"-75px", fontSize:"10px"}}>Copyright &#169; 2024 Fashion</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
