import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatIcon from '@mui/icons-material/Chat';
import GetQuote from '../components/GetQuote';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';


function Contact() {
  const navigate = useNavigate()
  const [originZip, setOriginZip] = useState("");
  const [destinationZip, setDestinationZip] = useState("");
  const handleSubmit = (e) => {
    if(originZip === '' || destinationZip === ''){
      alert("Please fill in both fields");
      return;
    }else{
      const setData ={
        originZip: originZip,
        destinationZip: destinationZip,
        date: 5
      }
      localStorage.setItem('data', JSON.stringify(setData))

      navigate(`/get-quote/${setData.date}`);
    }
  };
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  })
  return (
    <Box  overflow={'hidden'}>
      <Box sx={{
        backgroundImage: 'url(https://uscargofreight.com/wp-content/uploads/2023/04/us-cargo-contact-us-banner.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '0em',
        marginBottom: '0em',
        padding: '5rem 0',
        backgroundAttachment: 'fixed',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}>

        <Box sx={{
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          position: "absolute",
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }} />

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          maxWidth: '1140px',
          marginTop: '50px',
          gap: '5em'
        }}>
          <Box data-aos='fade-down' sx={{
            maxWidth: '580px'
          }}>
            <Typography variant='h4' sx={{
              fontFamily: '"Raleway", Sans-serif',
              color: 'white',
              marginBottom: '20px',
              fontSize: { sm: '45px', md: '50px' },
              textAlign: { xs: 'center', sm: 'center', md: 'left', xl: 'left' },
            }}>
              Contact Us
            </Typography>
            <Typography variant='p' sx={{
              margin: { xs: '0 auto', sm: '0' },
              color: "white",
              fontSize: { xs: '18px', sm: '28px' },
              fontFamily: '"Raleway", sans-serif',
              lineHeight: '1.3em',
            }}>
              Here at <strong>US Car-Go Freight</strong>, we strive to go above and beyond for each and every one of our clients. If you have any inquiries regarding our services or require assistance with a transit, please don't hesitate to contact US Car-Go. You can reach us via phone, email, or the following contact form.
            </Typography>
          </Box>
            <GetQuote />
        </Box>
      </Box>

      <Box sx={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        marginTop: '100px',
        marginBottom: '100px',
        marginLeft: '20px',
        marginRigth: '20px',
      }}>
        <Box data-aos='fade-right' sx={{
          width: '91px',
          height: '407px',
          backgroundColor: '#E01933',
          borderRadius: '35px 0 0 35px',
          display: { xs: 'none', sm: 'none', md: 'block' }
        }}>
        </Box>

        <Box sx={{
          width: { xs: '100%', sm: '100%', md: '376px' },
          height: { xs: '600px', md: '560px', sm: '600px' },
          backgroundColor: '#11172B',
          borderRadius: '35px 35px 35px 35px',
          paddingLeft: '28px',
          paddingTop: { xs: '40px', sm: '40px', md: '10px' },
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box sx={{
            display: { xs: 'block', sm: 'block', md: 'flex' },
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            flexDirection: { sm: 'column' },
            gap: '1px',
            marginTop: { xs: '10px', sm: '10px', md: '15px' }
          }} data-aos="fade-up">
            <Avatar sx={{
              margin: { xs: '0 auto', sm: '0 auto', md: '0' },
              marginTop: '10px',
              width: 48,
              height: 48,
              backgroundColor: 'white',
              color: "#11172B",
            }}><LocalPhoneIcon /></Avatar>
            <Box sx={{

            }}>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontWeight: '600'
              }}>Call Us</Typography>
              <Typography sx={{
                color: 'white',
                fontSize: '12px',
                fontFamily: '"Raleway", sans-serif',
              }}>if you need immediate assistance</Typography>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontSize: '14px',
              }}>(888) 249-8840</Typography>
            </Box>
          </Box>

          <Box sx={{
            display: { xs: 'block', sm: 'block', md: 'flex' },
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            flexDirection: { sm: 'column' },
            gap: '1px',
            marginTop: { xs: '10px', sm: '10px', md: '15px' }
          }}>
            <Avatar sx={{
              margin: { xs: '0 auto', sm: '0 auto', md: '0' },
              marginTop: '10px',
              width: 48,
              height: 48,
              backgroundColor: 'white',
              color: '#11172B'
            }}><MailOutlineIcon /></Avatar>
            <Box sx={{

            }}>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontWeight: '600'
              }}>Email Us</Typography>
              <Typography sx={{
                color: 'white',
                fontSize: '12px',
                fontFamily: '"Raleway", sans-serif',
              }}>Share your feedback and allow us</Typography>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontSize: '14px',
              }}>customersupport@uscargofreight.com</Typography>
            </Box>
          </Box>

          <Box sx={{
            display: { xs: 'block', sm: 'block', md: 'flex' },
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            flexDirection: { sm: 'column' },
            gap: '1px',
            marginTop: { xs: '10px', sm: '10px', md: '15px' }
          }}>
            <Avatar sx={{
              margin: { xs: '0 auto', sm: '0 auto', md: '0' },
              marginTop: '10px',
              width: 48,
              height: 48,
              backgroundColor: 'white',
              color: '#11172B'
            }}><ChatIcon /></Avatar>
            <Box sx={{

            }}>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontWeight: '600'
              }}>Live Chat</Typography>
              <Typography sx={{
                color: 'white',
                fontSize: '12px',
                fontFamily: '"Raleway", sans-serif',
              }}></Typography>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontSize: '14px',
              }}>Live us a message</Typography>
            </Box>
          </Box>

          <Box sx={{
            display: { xs: 'block', sm: 'block', md: 'flex' },
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            flexDirection: { sm: 'column' },
            gap: '1px',
            marginTop: { xs: '10px', sm: '10px', md: '15px' }
          }}>
            <Avatar sx={{
              margin: { xs: '0 auto', sm: '0 auto', md: '0' },
              marginTop: '10px',
              width: 48,
              height: 48,
              backgroundColor: 'white',
              color: '#11172B'
            }}><DraftsIcon /></Avatar>
            <Box sx={{

            }}>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontWeight: '600'
              }}>Write Us</Typography>
              <Typography sx={{
                color: 'white',
                fontSize: '12px',
                fontFamily: '"Raleway", sans-serif',
              }}>We would love to hear from you</Typography>
              <Typography sx={{
                color: 'white',
                fontFamily: '"Raleway", sans-serif',
                fontSize: '14px',
              }}>info@uscargofreight.com</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          width: {xs: '500px', lg: '590px'},
          mt: {xs: 10, lg: 0}
        }} data-aos="fade-left">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.652346076398!2d-82.47230212400187!3d27.94330121504419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c483624ec7f1%3A0x21cfceac87883ecf!2s1001%20W%20Cleveland%20St%2C%20Tampa%2C%20FL%2033606%2C%20USA!5e0!3m2!1sen!2sin!4v1712344582693!5m2!1sen!2sin" width="100%" height={400} style={{ border: 'none' }}></iframe>
        </Box>
      </Box>

      <Box sx={{
        position: 'relative',
        backgroundImage: 'url(https://uscargofreight.com/wp-content/uploads/2023/04/Contact-US-Cargo-Banner2.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '0em',
        marginBottom: '0em',
        padding: '80px 20px',
      }}>

        <Box sx={{
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          position: "absolute",
          backgroundColor: 'rgba(0, 0, 0 ,0.6)'
        }} />

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          maxWidth: '1140px',
          marginTop: '20px',
          gap: '5em'
        }} >
          <Box sx={{
            maxWidth: '470px',
            display: 'flex',
            flexDirection: 'column',
            margin: { sm: '0 auto', md: '0' },
            backgroundColor: '#21212480',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
          }} data-aos="zoom-out">
            <Typography variant='h4' sx={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 'bold',
              color: '#e01933',
              textAlign: 'center'
            }}>
              Get in touch
            </Typography>
            <Typography variant='h6' sx={{
              fontFamily: '"Raleway", sans-serif',
              color: 'white',
              textAlign: 'center'
            }}>
              We want to hear from you and help you with any question
            </Typography>

            <TextField variant='standard' label='Name*' sx={{
              marginTop: '20px',
              padding: '5px',
              color: 'white'
            }}
              InputProps={{
                sx: {
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white',
                    opacity: 1,
                  },
                  '& .MuiInputBase-input': {
                    color: 'white', // Matn rangini o'zgartirish
                    paddingLeft: '10px'
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#e01933', // Label rangini o'zgartirish
                },
              }}>

            </TextField>

            <TextField variant='standard' label='Email*' sx={{
              marginTop: '20px',
              padding: '5px',
              color: 'white'
            }}
              InputProps={{
                sx: {
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white',
                    opacity: 1,
                  },
                  '& .MuiInputBase-input': {
                    color: 'white', // Matn rangini o'zgartirish
                    paddingLeft: '10px'
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#e01933', // Label rangini o'zgartirish
                },
              }}>

            </TextField>

            <TextField variant='standard' label='Phone*' sx={{
              marginTop: '20px',
              padding: '5px',

            }}
              InputProps={{
                sx: {
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white',
                    opacity: 1,

                  },
                  '& .MuiInputBase-input': {
                    color: 'white', // Matn rangini o'zgartirish
                    paddingLeft: '10px'
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#e01933', // Label rangini o'zgartirish
                },
              }}>

            </TextField>

            <TextField variant='standard' label='Message*' sx={{
              marginTop: '20px',
              padding: '5px',
              color: 'white'
            }}
              InputProps={{
                sx: {
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white',
                    opacity: 1,
                  },
                  '& .MuiInputBase-input': {
                    color: '#fff', // Matn rangini o'zgartirish
                    paddingLeft: '10px'
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#e01933', // Label rangini o'zgartirish
                },
              }}>

            </TextField>

            <Button variant='contained' sx={{
              color: 'white',
              backgroundColor: '#E01933',
              marginTop: '20px',
            }}>
              Submit
            </Button>
          </Box>

          <Box sx={{
            maxWidth: '360px',
            height: '550px',
            margin: { xs: '0 auto', sm: '0 auto', md: '0' },
          }} data-aos='fade-up'>
            <img style={{ width: '100%', borderRadius: '20px' }}  src="https://uscargofreight.com/wp-content/uploads/2023/05/contact-us-img-650x1000.jpg.webp" alt="" />
          </Box>

        </Box>
      </Box>

    </Box>
  )
}

export default Contact