import { Box, Typography, Container, Button, Paper, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const reviews = [
  {
    name: "Andrei Popescu",
    text: "Cea mai bună cafea de specialitate din oraș! Atmosfera este extrem de primitoare, te simți exact ca acasă. Recomand cu drag flat white-ul.",
    rating: 5,
    date: "Acum o săptămână"
  },
  {
    name: "Elena Ionescu",
    text: "Un loc minunat pentru a lucra sau pentru a te relaxa cu o carte. Personalul este foarte amabil, iar cheesecake-ul este divin!",
    rating: 5,
    date: "Acum 2 săptămâni"
  }
];

const ReviewsPreview = () => {
  const navigate = useNavigate();

  return (
    <Box id="recenzii" sx={{ py: 15, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 2 }}>
            Testimoniale
          </Typography>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            Vezi ce au scris alții despre noi
          </Typography>
          <Box sx={{ width: '80px', height: '4px', bgcolor: 'warning.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4,
          justifyContent: 'center',
          mb: 6
        }}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ flex: 1 }}
            >
              <Paper sx={{ 
                p: 4, 
                borderRadius: '30px', 
                bgcolor: 'background.default',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, fontWeight: 700 }}>
                    {review.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>{review.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{review.date}</Typography>
                  </Box>
                </Box>
                <Rating value={review.rating} readOnly sx={{ mb: 2, color: 'warning.main' }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.primary', flexGrow: 1 }}>
                  "{review.text}"
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="outlined" 
            size="large"
            endIcon={<HiArrowRight />}
            onClick={() => navigate('/recenzii')}
            sx={{ 
              borderRadius: '50px', 
              px: 4, 
              py: 1.5, 
              fontWeight: 700,
              borderWidth: '2px',
              '&:hover': { borderWidth: '2px', transform: 'scale(1.05)' }
            }}
          >
            Vezi toate recenziile
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsPreview;
