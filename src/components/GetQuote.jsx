import { Box, Button, FormGroup, Input, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
const FormContainer = styled(FormGroup)(({ theme }) => ({
  padding: "20px 30px",
  width: "80%",
  borderRadius: "35px",
  backgroundColor: 'transparent',
  backgroundImage: "linear-gradient(180deg, #11172b 20%, #21212480 100%);",
  boxShadow: "0px 0px 15px 0px rgba(255, 255, 255, 0.09)",
  [theme.breakpoints.up("lg")]: {
    padding: "50px",
  },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  marginBlockStart: "0.4rem",
  marginBlockEnd: "1rem",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "1.2em",
  color: "white",
  fontFamily: "'Raleway', Sans-serif",
  [theme.breakpoints.up("sm")]: {
    fontSize: "26px",
    marginBlockStart: "0.5rem",
  },
}));

const FormInput = styled(Input)(() => ({
  width: "100%",
  borderBottom: "1px solid #ffffff",
  padding: "0.5rem 1rem",
  marginBottom: "15px",
  color: "#ddd",
}));

const GetQuote = () => {
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
        date: 1
      }
      localStorage.setItem('data', JSON.stringify(setData))

      navigate(`/get-quote/${1}`);
    }
  };
  return (
    <FormContainer>
      <Box>
        <FormTitle variant="h2">Fill Up the Get Quote Form</FormTitle>
        <FormTitle variant="h4">
          And Get a Guaranteed Best Competitive Price
          <span style={{ color: "#E01933" }}>.</span>
        </FormTitle>
      </Box>
      <Box>
        <FormInput
          type="text"
          name="origin-zip"
          placeholder="Origin Zip or City"
          variant="plain"
          onChange={e => setOriginZip(e.target.value)}
        />
        <FormInput
          type="text"
          name="destination-zip"
          placeholder="Destination Zip or City"
          onChange={e => setDestinationZip(e.target.value)}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          margin: "0 auto",
          maxWidth: "146px",
          width: "100%",
          padding: "15px 40px",
          fontSize: "16px",
          borderRadius: "50px",
          backgroundColor: "#E01933",
          transition: "0.1s linear",
          "&:hover": {
            backgroundColor: "#E01933",
            opacity: 0.8,
          },
        }}
        disableRipple
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </FormContainer>
  );
};

export default GetQuote;
