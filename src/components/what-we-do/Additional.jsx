import { Box, Container, Grid } from "@mui/material";
import { Heading, Section, Title4 } from "../../pages/how-it-works/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const AdditionalCardData = [
  { text: "Collector Car Transports", path: "/" },
  { text: "Snowbirds Car Shipping", path: "/" },
  { text: "Business Services", path: "/" },
  { text: "Student Auto Shipping", path: "/" },
  { text: "Military Car Transport", path: "/" },
  { text: "Online Purchases", path: "/" },
  { text: "Inoperable vehicles", path: "/" },
  { text: "Race Transport", path: "/" },
];

function Additional() {
  const navigate = useNavigate();

  return (
    <>
      <Section component={"section"} id="additional">
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Heading
              variant="h2"
              color={"#11172B"}
              sx={{
                textAlign: "center",
                padding: "15px",
                marginBottom: { xs: "20px", sm: "20px", md: "50px" },
              }}
            >
              Additional{" "}
              <Box component={"span"} sx={{ color: "#E01933" }}>
                Services.
              </Box>
            </Heading>

            <Grid
              container
              component={"ul"}
              sx={{
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {AdditionalCardData.map(({ text, path, idx }) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  component={"li"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    gap: "10px",
                    padding: "15px",
                    cursor: "pointer",
                    "&:hover": {
                      svg: {
                        fill: "#E01933",
                      },
                    },
                  }}
                  key={idx}
                  onClick={() => navigate(path)}
                >
                  <CheckCircleIcon
                    fontSize={"large"}
                    sx={{ transition: "fill 0.2s" }}
                  />
                  <Title4 variant="h3" textcolor={"#11172B"}>
                    {text}{" "}
                  </Title4>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Additional;
