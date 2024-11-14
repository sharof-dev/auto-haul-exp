import React from 'react'
import InsuranceIcon from '@mui/icons-material/Policy';
import TruckIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GroupIcon from '@mui/icons-material/Group';

import ArticleIcon from '@mui/icons-material/Article';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Container, Typography, Grid, Box, Card, CardContent, Button } from '@mui/material';
import { BannerColor, BannerImage, Section } from '../../pages/how-it-works/styles'

const data = [
    {
        icon: <InsuranceIcon style={{ fontSize: 70, color: 'white' }} />,
        value: '$1,000,000',
        description: 'Enclosed Carrier Insurance Coverage',
    },
    {
        icon: <InsuranceIcon style={{ fontSize: 70, color: 'white' }} />,
        value: '$250,000',
        description: 'Open Carrier Insurance Coverage',
    },
    {
        icon: <GroupIcon style={{ fontSize: 70, color: 'white' }} />,
        value: '15,000',
        description: 'A+ Vetted Drivers & Carriers',
    },
    {
        icon: <ThumbUpIcon style={{ fontSize: 70, color: 'white' }} />,
        value: '97%',
        description: 'Customers Recommend Us',
    },
];

const MiniCard = () => {
    return (
        <Section >
                <BannerImage image={'https://uscargofreight.com/wp-content/uploads/2023/04/Home-CTA-Bg.jpg'} parallax={"true"} />
                <BannerColor color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"} />
            <Container>
                <Grid container spacing={0} justifyContent="center">
                    {data.map((item, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                                <CardContent sx={{ textAlign: 'center', color: 'white' }}>
                                    {item.icon}
                                    <Typography variant="h5" style={{color:'#e01933'}} fontWeight={600}>{item.value}</Typography>
                                    <Typography sx={{fontSize: '1.5rem'}} fontWeight={600}>{item.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={6} p={5} sx={{ backgroundColor: '#11172b83', borderRadius: 2, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                    <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        Want to know the auto shipping quote with us?
                    </Typography>
                    <Typography variant="h6" fontWeight={'bold'}>
                        Known for their competitive rates from individual services to business shipping solutions. <br />
                        US Car-Go strives to deliver a 5-star vehicle-shipping experience to every customer.
                    </Typography>
                    <Box sx={{display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}}}>
                        <Button variant='contained' style={{ color: 'white', backgroundColor: '#e01933', borderRadius: 30 }}><ArticleIcon /> &nbsp; GET INSTANT QUOTE</Button>
                        <Button variant='contained' style={{ color: 'white', backgroundColor: '#e01933', borderRadius: 30 }}><PhoneAndroidIcon /> &nbsp; CALL AT (888) 249-8840</Button>
                    </Box>
                </Box>
            </Container>
        </Section>
    )
}

export default MiniCard
