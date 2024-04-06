import React from "react";
import { Card, CardMedia } from "@mui/material";

const SwiperCart = ({ food }) => {
  return (
    <>
      <Card sx={{ borderRadius: "12px", border: "1px solid #ccc", p: 2 }}>
        <CardMedia
          image={food.images[0]}
          sx={{
            height: { xs: 200, sm: 200, md: 200 },
          }}
        />
      </Card>
    </>
  );
};

export default SwiperCart;
