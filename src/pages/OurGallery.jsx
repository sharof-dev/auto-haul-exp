import { useState } from 'react';
import { Box, Container, Typography, styled } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import '../styles/our_gallery.css'
// Define your images data
const images = [
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/02/open-trailer-8_11zon-1-1.jpg',
    alt: 'Mechanical keyboard with white keycaps.',
  },
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/05/Enclosed-car-transport-img.jpg',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/02/open-trailer-4_11zon.png',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/05/enclosed-auto-transport-img-9.jpg',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
  {
    src: '	https://uscargofreight.com/wp-content/uploads/2023/02/open-trailer-3.jpeg',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/05/enclosed-auto-transport-img-3.jpg',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/05/Open-Air-Transport-img.jpg',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/05/enclosed-auto-transport-img-5.jpg',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
  {
    src: 'https://uscargofreight.com/wp-content/uploads/2023/04/Boat-and-Yacht-Transport-Bg4.jpg',
    alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
  },
];

const Images = ({ data, onClick }) => {
  return (
    <Container maxWidth='xl'>
      <Box sx={{margin: '3rem 0'}}>
        <Typography variant='h2' fontWeight={600} color={'#e019333'} textAlign={'center'}>
          Portfolio<span style={{mt: '1rem',position: 'relative', top: 15 , color: '#e01933' }}>•</span>
        </Typography>
      </Box>

      <div className='images-container' sx={{margin: '3rem 0 0 3rem'}}>
        {data.map((slide, index) => (
          <div
            onClick={() => onClick(index)}
            key={index}
            className='image'
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
    </Container>
  );
};

const OurGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Images
        data={images}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
      />
    </>
  );
};

export default OurGallery;
