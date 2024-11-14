import { Box, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ItemDrop({ list, title, text, dark, listDot, itemget }) {
  const [dropToggle, setDropToggle] = useState(false);

  return (
    <Box component={"div"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          padding: "15px",
          border: `2px solid ${dark ? "#fff" : "rgba(0, 0, 0, 0.2)"}`,
          borderRadius: "50px",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={() => setDropToggle((prev) => !prev)}
      >
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            margin: "0 10px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "3px solid #868686",
          }}
        >
          {dropToggle ? (
            <RemoveIcon sx={{ color: "#E01933" }} />
          ) : (
            <AddIcon sx={{ color: "#E01933" }} />
          )}
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "18px" },
            fontWeight: 700,
            lineHeight: "1.2em",
            color: `${dark ? "#fff" : "#11172B"}`,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          padding: { xs: "25px", sm: "25px", md: "35px" },
          transition: "all 0.3s linear",
          display: `${dropToggle ? "block" : "none"}`,
        }}
      >
        {text && (
          <Typography
            variant="body1"
            sx={{
              color: `${dark ? "#fff" : "#7A7A7A"}`,
              display: "inline-block",
              overflow: "hidden",
              maxHeight: `${dropToggle ? "50rem" : "0"}`,
            }}
          >
            {text}
          </Typography>
        )}

        <Box
          component={listDot ? "ul" : "ol"}
          sx={{ paddingLeft: "2rem", marginTop: "1rem" }}
        >
          {list?.map(({ name, listText }, idx) => (
            <Box
              component={"li"}
              sx={{
                color: `${dark ? "#fff" : "#7A7A7A"}`,
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.7",
                marginBottom: "10px",
              }}
              key={idx}
            >
              <Box component={"span"} sx={{ textDecoration: "none" }}>
                <strong>{name}</strong>{" "}
              </Box>
              {listText}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ItemDrop;
