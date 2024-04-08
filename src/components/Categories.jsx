import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQueryFoodQuery } from "../redux/services/foodApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Card, CardMedia } from "@mui/material";

const Categories = () => {
  const { data } = useQueryFoodQuery();

  return (
    <Box
      component="section"
      textAlign="center"
      py={3}
      sx={{ backgroundColor: "#F3F4F9" }}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" pb={1}>
          Популярні товари
        </Typography>
        <Box>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            style={{ padding: "10px" }}
          >
            {data?.map(({ id, images }) => (
              <SwiperSlide key={id}>
                <Card>
                  <CardMedia
                    image={images[0]}
                    sx={{
                      height: 250,
                    }}
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
