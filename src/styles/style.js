import {
    Box,
    Button,
    FormGroup,
    Input,
    styled,
    Typography,
  } from "@mui/material";
  
  // background image
  export const BannerImage = styled(Box)(({ image, parallax }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: parallax ? "fixed" : "",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "-2",
  }));
  
  /// Styled
  export const Section = styled(Box)(({ theme }) => ({
    padding: "50px 0",
    position: "relative",
    [theme.breakpoints.up("xs")]: {
      padding: "50px 0",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "50px 0",
    },
    [theme.breakpoints.up("md")]: {
      padding: "100px 0",
    },
  }));
  
  // background color
  export const BannerColor = styled(Box)(({ color }) => ({
    width: "100%",
    height: "100%",
    background: `${color}`,
    backgroundColor: "transparent",
    opacity: 0.8,
    position: "absolute",
    top: 0,
    lef: 0,
    zIndex: "-1",
  }));
  
  export const ButtonStyled = styled(Button)(() => ({
    maxWidth: "270px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "15px 20px",
    backgroundColor: "#E01933",
    fontSize: "16px",
    borderRadius: "50px",
  }));
  
  export const Title = styled(Typography)(({ theme, color }) => ({
    marginBottom: "19px",
    fontSize: "35px",
    fontWeight: 700,
    lineHeight: "1em",
    color: `${color ? color : "#ffffff"}`,
    [theme.breakpoints.up("xs")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "55px",
    },
  }));
  
  export const Title2 = styled(Typography)(({ theme, color }) => ({
    marginBottom: "19px",
    fontSize: "35px",
    fontWeight: 700,
    lineHeight: "1em",
    color: `${color ? color : "#ffffff"}`,
    [theme.breakpoints.up("xs")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px",
    },
  }));
  
  export const Title3 = styled(Typography)(({ textcolor }) => ({
    fontSize: "30px",
    fontWeight: 600,
    lineHeight: "1em",
    color: textcolor ? textcolor : "#ffffff",
  }));
  
  export const Title4 = styled(Typography)(({ theme, textcolor }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "1.2em",
    color: textcolor ? textcolor : "#ffffff",
    [theme.breakpoints.up("xs")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "22px",
    },
  }));
  
  export const BodyText1 = styled(Typography)(({ theme, color }) => ({
    marginBottom: "10px",
    width: "100%",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "1.4em",
    color: `${color ? color : "#ffffff"}`,
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px",
      marginBottom: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "19px",
    },
  }));
  
  export const FormContainer = styled(FormGroup)(({ theme }) => ({
    padding: "20px 30px",
    width: "100%",
    borderRadius: "35px",
    backgroundImage: "linear-gradient(180deg, #11172b 20%, #21212480 100%);",
    boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.08)",
    [theme.breakpoints.up("lg")]: {
      padding: "50px",
    },
  }));
  
  export const FormTitle = styled(Typography)(({ theme }) => ({
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
  
  export const FormInput = styled(Input)(() => ({
    width: "100%",
    borderBottom: "1px solid #ffffff",
    padding: "0.5rem 1rem",
    marginBottom: "15px",
    color: "#ddd",
  }));
  