import { Box, Typography, Container, Card, CardMedia, CardContent, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { menuData } from '../data';

const Shop = () => {
  const navigate = useNavigate();

  return (
    <Box id="shop" sx={{ py: 15, bgcolor: '#F9F7F5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 2, textTransform: 'uppercase' }}>
              La tine acasă
            </Typography>
            <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 3 }}>
              Cafea de calitate, în fiecare zi
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.2rem' }}>
              Adu experiența Camara în propria bucătărie. Alege boabele noastre proaspăt prăjite, selectate cu grijă din cele mai bune origini.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 4 
        }}>
          {menuData.products.map((product, index) => (
            <Card 
              key={product.slug}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(`/produs/${product.slug}`)}
              sx={{ 
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 24px)' },
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px', 
                overflow: 'hidden', 
                bgcolor: '#FFFFFF',
                boxShadow: '0 10px 40px rgba(62, 39, 35, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 25px 50px rgba(62, 39, 35, 0.15)',
                  '& .product-image': {
                    transform: 'scale(1.05)',
                  }
                }
              }}
            >
              <Box sx={{ overflow: 'hidden', height: { xs: '250px', md: '280px' }, position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={product.img}
                  alt={product.name}
                  className="product-image"
                  sx={{ 
                    height: '100%', 
                    width: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </Box>
              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 800, mb: 1, fontSize: '1.2rem' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px', fontSize: '0.85rem' }}>
                  {product.desc}
                </Typography>
                
                <Box sx={{ mt: 'auto' }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2, justifyContent: 'center', alignItems: 'baseline' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.5, textTransform: 'uppercase' }}>
                      de la
                    </Typography>
                    <Typography variant="h6" color="warning.main" sx={{ fontWeight: 800 }}>
                      {product.sizes[0].price}
                    </Typography>
                  </Stack>
                  
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      py: 1,
                      borderRadius: '12px', 
                      fontWeight: 700,
                      textTransform: 'none',
                      bgcolor: 'rgba(62, 39, 35, 0.05)',
                      color: 'primary.main',
                      boxShadow: 'none',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: '#FFFFFF'
                      }
                    }}
                  >
                    Vezi Detalii
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Shop;
