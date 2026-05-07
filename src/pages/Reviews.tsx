import { Box, Typography, Container, Button, Paper, Avatar, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';

const allReviews = [
  { name: "Andrei Popescu", text: "Cea mai bună cafea de specialitate din oraș! Atmosfera este extrem de primitoare, te simți exact ca acasă. Recomand cu drag flat white-ul.", rating: 5, date: "Acum o săptămână" },
  { name: "Elena Ionescu", text: "Un loc minunat pentru a lucra sau pentru a te relaxa cu o carte. Personalul este foarte amabil, iar cheesecake-ul este divin!", rating: 5, date: "Acum 2 săptămâni" },
  { name: "Mihai Georgescu", text: "Espresso perfect! Se vede că boabele sunt de cea mai bună calitate. Prăjirea este exact cum trebuie.", rating: 5, date: "Acum o lună" },
  { name: "Ioana Radu", text: "Locația este superbă, designul interior este deosebit. Cafeaua de la V60 a fost o experiență în sine.", rating: 5, date: "Acum o lună" },
  { name: "Stefan Marin", text: "Un colț de liniște în agitația orașului. Cafeaua proaspătă și muzica ambientală fac totul.", rating: 5, date: "Acum 2 luni" },
  { name: "Maria Drăghici", text: "Am venit pentru cafea, am rămas pentru brownie! Cel mai bun pe care l-am mâncat vreodată.", rating: 5, date: "Acum 2 luni" }
];

const Reviews = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 15, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Button 
          startIcon={<HiArrowLeft />} 
          onClick={() => navigate('/')}
          sx={{ mb: 4, color: 'primary.main', fontWeight: 700 }}
        >
          Înapoi la Acasă
        </Button>
        
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            Recenziile Clienților
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Suntem mândri de comunitatea pe care am construit-o.
          </Typography>
          <Box sx={{ width: '80px', height: '4px', bgcolor: 'warning.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          justifyContent: 'center'
        }}>
          {allReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ width: '100%', maxWidth: '350px' }}
            >
              <Paper sx={{ 
                p: 4, 
                borderRadius: '30px', 
                bgcolor: '#FFFFFF',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' }
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
                <Typography variant="body1" sx={{ color: 'text.primary', flexGrow: 1, lineHeight: 1.6 }}>
                  "{review.text}"
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
