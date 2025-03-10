import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const articles = [
    { title: "Article 1", image: "images/header_book.jpg" },
    { title: "Article 2", image: "images/header_book.jpg" },
    { title: "Article 3", image: "images/header_book.jpg" },
];

const Body = () => {
    return (
        <Container>
            <Typography variant="h5" sx={{ color: "black" }} gutterBottom>
                New Articles
            </Typography>
            <Swiper spaceBetween={10} slidesPerView={2}>
                {articles.map((article, index) => (
                    <SwiperSlide key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={article.image}
                                alt={article.title}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    {article.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Body;
