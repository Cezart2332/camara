import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Images from folders
import interior1 from '../assets/coffee interiors/aiilolo-pair-2862155_1920.jpg';
import interior2 from '../assets/coffee interiors/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.jpg';
import interior3 from '../assets/coffee interiors/minhthai0105-coffee-5082544_1920.jpg';
import heroImg from '../assets/coffee interiors/close-up-image-man-holds-coffee-with-heart-foam-top-view.jpg';
import bag1 from '../assets/coffee bags/ben-moreland-O6l12PKoQsc-unsplash.jpg';
import bag2 from '../assets/coffee bags/nadia-valko-7QlJ79Cj43w-unsplash.jpg';

const galleryImages = [
  { img: interior1, title: 'Atmosferă' },
  { img: bag1, title: 'Cafea de Specialitate' },
  { img: interior2, title: 'Design Interior' },
  { img: bag2, title: 'Produse Proaspete' },
  { img: interior3, title: 'Momente la Camara' },
  { img: heroImg, title: 'Arta Cafelei' },
];

const Gallery = () => {
  return (
    <Box id="gallery" sx={{ 
      py: 15, 
      bgcolor: 'background.default', 
      position: 'relative', 
      overflow: 'hidden',
      '& .swiper': {
        paddingTop: '50px',
        paddingBottom: '100px',
      },
      '& .swiper-slide': {
        filter: 'grayscale(100%)',
        opacity: 0.5,
        transition: 'all 0.5s ease',
        transform: 'scale(0.8)',
      },
      '& .swiper-slide-active': {
        filter: 'grayscale(0%)',
        opacity: 1,
        transform: 'scale(1.1)',
        zIndex: 2,
      },
      '& .swiper-pagination-bullet': {
        width: '12px',
        height: '12px',
        bgcolor: 'primary.main',
        opacity: 0.2,
      },
      '& .swiper-pagination-bullet-active': {
        opacity: 1,
        bgcolor: 'warning.main',
        width: '30px',
        borderRadius: '10px',
      },
      '& .swiper-button-next, & .swiper-button-prev': {
        color: 'warning.main',
        bgcolor: 'rgba(255,255,255,0.2)',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backdropFilter: 'blur(8px)',
        top: '50%',
        '&:after': {
          fontSize: '1.8rem',
          fontWeight: 'bold'
        },
        display: { xs: 'none', md: 'flex' },
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        '&:hover': {
          bgcolor: 'warning.main',
          color: 'primary.main',
        }
      }
    }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 2 }}>
            Galerie Foto
          </Typography>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            Momente din Camara
          </Typography>
          <Box sx={{ width: '80px', height: '4px', bgcolor: 'warning.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={50}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 60
              },
            }}
          >
            {galleryImages.map((item, index) => (
              <SwiperSlide key={index} style={{ width: '500px' }}>
                <Box
                  sx={{ 
                    height: { xs: '400px', md: '600px' },
                    borderRadius: '50px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 30px 60px rgba(62, 39, 35, 0.2)',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                    }}
                  />
                  <Box 
                    className="slide-content"
                    sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      width: '100%', 
                      p: 6,
                      background: 'linear-gradient(transparent, rgba(62, 39, 35, 0.9))',
                      color: '#FFFFFF',
                      opacity: 0,
                      transition: 'opacity 0.5s ease',
                      '.swiper-slide-active &': {
                        opacity: 1
                      }
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Gallery;
