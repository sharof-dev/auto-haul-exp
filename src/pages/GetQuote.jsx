import {
  Container,
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  styled,
  Input,
  Checkbox,
} from "@mui/material";
import { BannerColor, BannerImage, Section } from "./how-it-works/styles";
import "./custome.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useParams } from "react-router-dom";

export const FormInput = styled(Input)(() => ({
  width: "100%",
  borderBottom: "1px solid #666",
  padding: "0.5rem 1rem",
  marginBottom: "15px",
  input: {
    color: "#fff",
    "&::placeholder": {
      color: "#fff",
      opacity: 1,
    },
  },
}));

const currencies = [
  {
    value: "undefined",
    label: "Select or Enter Your Vehicle Type",
  },
  {
    value: "car",
    label: "Car",
  },
  {
    value: "truck",
    label: "Truck",
  },
  {
    value: "suv",
    label: "SUV",
  },
  {
    value: "pickup",
    label: "Pickup",
  },
  {
    value: "dually",
    label: "Dually",
  },
  {
    value: "van",
    label: "Van",
  },
  {
    value: "rv",
    label: "RV",
  },
  {
    value: "travel trailer",
    label: "Travel Trailer",
  },
  {
    value: "other",
    label: "Other",
  },
];

function GetQuote() {
  const [selectVal, setSelectVal] = useState(currencies[0].value);
  const params = useParams()
  const getData = localStorage.getItem('data')

  const handleSelect = (event) => {
    setSelectVal(event.target.value);
  };
  const [input, setInput] = useState({
    originZip: '',
    destinationZip: '',
    date: '',
    vehivTipe: selectVal,
    transportType: undefined,
    vehicleCondition: undefined,
    year: null,
    machineMake: "",
    machineModel: "",
    username: "",
    email: "",
    phone: "",
    submitting: false
  });
  useEffect(() => {
    const storedData = JSON.parse(getData);
    if (storedData && storedData.date === +params.id) {
      setInput((prevInput) => ({
        ...prevInput,
        originZip: storedData.originZip,
        destinationZip: storedData.destinationZip,
      }));
    }
  }, [getData, params.id]);

  const handleSubmit = async (e) => {
    try {
      const trimmedInput = {
        ...input,
        origin: input.originZip.trim(),
        destination: input.destinationZip.trim(),
        date: input.date.trim(),
        vehicle_type: input.vehivTipe.trim(),
        make: input.machineMake.trim(),
        model: input.machineModel.trim(),
        name: input.username.trim(),
        mail: input.email.trim(),
        phone: input.phone.trim(),
      };
  
      if (
        trimmedInput.origin === "" ||
        trimmedInput.destination === "" ||
        trimmedInput.date === "" ||
        trimmedInput.vehicle_drives === "undefined" ||
        trimmedInput.year === null ||
        trimmedInput.make === "" ||
        trimmedInput.model === "" ||
        trimmedInput.name === "" ||
        trimmedInput.mail === "" ||
        trimmedInput.phone === "" ||
        !input.submitting
      ) {
        toast.error("Please fill out all required fields!");
        return;
      }
  
      const api = "http://45.138.158.215:8080/main/v1/order/create";
      const response = await axios.post(api, trimmedInput);
  
      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        setInput({
          originZip: "",
          destinationZip: "",
          date: "",
          vehivTipe: selectVal,
          transportType: undefined,
          vehicleCondition: undefined,
          year: null,
          machineMake: "",
          machineModel: "",
          username: "",
          email: "",
          phone: "",
          submitting: false,
        });
      } else {
        toast.error("Failed to submit the form!");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error(error);
    }
  };
  

  return (
    <>
      <Section component={"section"} id={"get-quote"}>
        {/* Banner Image */}
        <BannerImage
          image={"/assets/about/car_go_background.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />

        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" />
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" gutterBottom color="white">
              We Want to Earn Your Trust
            </Typography>
            <Typography variant="h5" gutterBottom color="white">
              Get a Quote
            </Typography>
            <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
              By submitting the information below you will receive a free
              instant rate quote on how much it will cost to ship your vehicle.
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              If you need to ship more vehicles, vehicles that are in different
              condition, or vehicles that require different types of carriers,
              please Contact Us directly.
            </Typography>
          </Box>

          <Box
            component={"div"}
            sx={{
              margin: "0",
              justifyContent: "center",
              padding: { xs: "20px", sm: "20px", md: "50px" },
              borderRadius: "35px",
              backgroundImage: `linear-gradient(180deg, #11172B 20%, #10101075 100%);`,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <FormInput
                  required
                  fullWidth
                  placeholder="Origin Zip or City"
                  variant="outlined"
                  value={input.originZip}
                  onChange={(e) => setInput({ ...input, originZip: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormInput
                  required
                  fullWidth
                  placeholder="Destination Zip or City"
                  variant="outlined"
                  sx={{ input: { color: "white" } }}
                  value={input.destinationZip}
                  onChange={(e) => setInput({ ...input, destinationZip: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormInput
                  required
                  fullWidth
                  placeholder="Date"
                  type="date"
                  variant="outlined"
                  sx={{ colorScheme: "dark" }}
                  value={input.date}
                  onChange={(e) => setInput({ ...input, date: e.target.value })}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  label="Vehicle Type"
                  SelectProps={{ native: true }}
                  variant="standard"
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  className="select_box"
                  sx={{
                    select: {
                      color: "#fff",
                      borderBottom: "1px solid #666",
                      outline: 0,
                      borderRadius: 0,
                    },
                    option: {
                      color: "#11172B",
                    },
                  }}
                  value={input.vehivTipe}
                  onChange={e => setInput({ ...input, vehivTipe: e.target.value })}
                  required
                >
                  {currencies.map(({ value, label }, idx) => (
                    <option key={idx} value={value}>
                      {label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle1" gutterBottom color="white">
                  Transport Type:
                </Typography>
                <RadioGroup defaultValue="Open/Standard">
                  <FormControlLabel
                    value="Open/Standard"
                    control={
                      <Radio
                        required
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#E01933",
                          },
                        }}
                        onChange={() => setInput({ ...input, transportType: true })}
                      />
                    }
                    label="Open/Standard"
                    sx={{ color: "white" }}
                  />
                  <FormControlLabel
                    value="Enclosed"
                    control={
                      <Radio
                        required
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#E01933",
                          },
                        }}
                        onChange={() => setInput({ ...input, transportType: false })}
                      />
                    }
                    label="Enclosed"
                    sx={{ color: "white" }}
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle1" gutterBottom color="white">
                  Vehicle Condition:
                </Typography>
                <RadioGroup defaultValue="Vehicle Drives">
                  <FormControlLabel
                    value="Vehicle Drives"
                    control={
                      <Radio
                        required
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#E01933",
                          },
                        }}
                        value={input.vehicleCondition}
                        onChange={() => setInput({ ...input, vehicleCondition: true })}
                      />
                    }
                    label="Vehicle Drives"
                    sx={{ color: "white" }} // Label color
                  />

                  <FormControlLabel
                    value="Inoperable"
                    control={
                      <Radio
                        required
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#E01933",
                          },
                        }}
                        onChange={() => setInput({ ...input, vehicleCondition: false })}
                      />
                    }
                    label="Inoperable"
                    sx={{ color: "white" }} // Label color
                  />
                </RadioGroup>
              </Grid>

              {/* other cars */}

              <>
                <Grid item xs={12} sm={6} md={4}>
                  <FormInput
                    required
                    fullWidth
                    type="number"
                    placeholder="Enter Year"
                    variant="outlined"
                    min={1000}
                    max={9999}
                    onChange={e => setInput({ ...input, year: e.target.value })}
                    value={input.year}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormInput
                    required
                    fullWidth
                    type="text"
                    placeholder="Enter Make"
                    variant="outlined"
                    sx={{ input: { color: "white" } }}
                    onChange={e => setInput({ ...input, machineMake: e.target.value })}
                    value={input.machineMake}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormInput
                    required
                    fullWidth
                    type="text"
                    placeholder="Enter Model"
                    variant="outlined"
                    sx={{ input: { color: "white" } }}
                    onChange={e => setInput({ ...input, machineModel: e.target.value })}
                    value={input.machineModel}
                  />
                </Grid>
              </>


              <Grid item xs={12} sm={6} md={4}>
                <FormInput
                  required
                  fullWidth
                  placeholder="Name"
                  variant="outlined"
                  sx={{ input: { color: "white" } }}
                  onChange={e => setInput({ ...input, username: e.target.value })}
                  value={input.username}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormInput
                  required
                  fullWidth
                  placeholder="Email"
                  variant="outlined"
                  sx={{ input: { color: "white" } }}
                  onChange={e => setInput({ ...input, email: e.target.value })}
                  value={input.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormInput
                  fullWidth
                  placeholder="Phone"
                  variant="outlined"
                  sx={{ input: { color: "white" } }}
                  onChange={e => setInput({ ...input, phone: e.target.value })}
                  value={input.phone}
                />
              </Grid>
            </Grid>

            <FormControlLabel
              control={
                <Checkbox
                  required
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                />
              }
              label="Submitting this form allows quote replies by phone, text, or email. Info stays private."
              sx={{
                color: "#fff",
              }}
              value={input.check}
              onChange={e => setInput({ ...input, submitting: !input.submitting })}
            />

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                sx={{
                  margin: "0 auto",
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
              >
                Request a Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default GetQuote;
