import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, styled } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import zIndex from '@mui/material/styles/zIndex';
import { BorderBottom, BorderTop } from '@mui/icons-material';
const DateBox = styled(Box)(({ theme }) => ({
    width: '100px',
    height: 'auto',
    position: 'relative', // Ensure parent is positioned relative
    backgroundColor: '#11172b',
    top: '-100px', left: '-20px',
    color: 'white',
    padding: '22px 12px',
    textAlign: 'right',
    zIndex: 2,
    "&::before": {
        content: '""',
        position: 'absolute',
        top: '-15%',
        left: '-30px',
        width: '100px',
        height: '62px',
        color: '#912f3d',
        borderTop: '10px solid #912f3d',
        borderBottom: '10px solid currentColor',
    }
}))

const newsData = [
    {
        date: '05 Aug',
        image: 'https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp', // rasmlar uchun to'g'ri link qo'yish kerak
        title: 'New Hampshire Car Transport',
        author: 'US Car-Go',
        dateFull: 'August 5, 2024',
        description: 'New Hampshire Car Transport New Hampshire Car Transport by US Car-Go Freight Welcome to US Car-Go Freight, where our New Hampshire shipping is designed to give you the..',
    },
    {
        date: '31 Jul',
        image: 'https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp',
        title: 'Louisiana Car Transport',
        author: 'US Car-Go',
        dateFull: 'July 31, 2024',
        description: 'Louisiana Car Transport Louisiana Car Transport: A Comprehensive Guide by US Car-Go Freight When it comes to transporting vehicles in Louisiana, US Car-Go Freight stands out as a..',
    },
    {
        date: '26 Jul',
        image: 'https://uscargofreight.com/wp-content/uploads/2024/07/how-to-start-car-hauling-business-img-1300x650.jpg.webp',
        title: 'How to Start a Car Hauling Business',
        author: 'US Car-Go',
        dateFull: 'July 26, 2024',
        description: 'How to Start a Car Hauling Business Starting a car hauling business Car hauling business can be a lucrative venture for entrepreneurs interested in the transportation and logistics..',
    },
];

const NewsCard = ({ date, image, title, author, dateFull, description }) => (
    <Grid item xs={12} md={4}>
        <Card sx={{ backgroundColor: '#11172b', color: 'white', borderRadius: 2, position: 'relative' }}>
            <CardMedia component="img" height="250" image={image} alt={title} />
            <DateBox>
                <Typography variant="span">{date}</Typography>
            </DateBox>
            <CardContent sx={{ p: '1rem 2rem' }}>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, p: '0 1rem' }}>
                    <Typography variant='body1'>{author}</Typography>&nbsp;
                    <CalendarTodayIcon sx={{ fontSize: 16, mr: 1 }} />
                    <Typography variant="body1">{dateFull}</Typography>
                </Box>
                <Typography variant="body2" sx={{ mt: 2, lineHeight: 2 }}>
                    {description}
                </Typography>
                <Button variant="contained" sx={{
                    backgroundColor: '#E53935', // Custom background color
                    color: '#fff', // Custom text color
                    borderRadius: '2rem',
                    mt: 2,
                    '&:hover': {
                        backgroundColor: '#d32f2f', // Color on hover
                    },
                }}>
                    Read More
                </Button>
            </CardContent>
        </Card>
    </Grid>
);

const LatestNews = () => (
    <Container sx={{ py: 6 }}>
        <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', m: '2rem 0' }}>
            Latest <span style={{ color: '#E53935' }}>News.</span>
        </Typography>
        <Grid container spacing={4}>
            {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
            ))}
        </Grid>
    </Container>
);

export default LatestNews;
