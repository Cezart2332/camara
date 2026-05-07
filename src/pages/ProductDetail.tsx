import { Box, Typography, Container, Button, Stack, Paper, Chip, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { menuData } from '../data';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Find product by slug across all categories
  const allProducts = [...menuData.coffee, ...menuData.teas, ...menuData.desserts, ...menuData.products];
  const product = allProducts.find(p => p.slug === slug);

  useEffect(() => {
    if (product && 'sizes' in product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].label);
    }
  }, [product]);

  if (!product) {
    return (
      <Box sx={{ py: 20, textAlign: 'center' }}>
        <Typography variant="h4">Produsul nu a fost găsit.</Typography>
        <Button onClick={() => navigate('/')} sx={{ mt: 4 }}>Înapoi la meniu</Button>
      </Box>
    );
  }

  const currentPrice = 'sizes' in product && selectedSize 
    ? product.sizes.find(s => s.label === selectedSize)?.price 
    : 'price' in product ? product.price : '';

  const handleSizeChange = (_: React.MouseEvent<HTMLElement>, newSize: string | null) => {
    if (newSize !== null) {
      setSelectedSize(newSize);
    }
  };

  return (
    <Box sx={{ py: 15, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 4, opacity: 0.7 }}>
          <Typography 
            variant="body2" 
            sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
            onClick={() => navigate('/')}
          >
            Acasă
          </Typography>
          <HiOutlineChevronRight size={14} />
          <Typography 
            variant="body2" 
            sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
            onClick={() => navigate('/')}
          >
            Meniu
          </Typography>
          <HiOutlineChevronRight size={14} />
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{product.name}</Typography>
        </Stack>

        <Button 
          startIcon={<HiArrowLeft />} 
          onClick={() => navigate('/')}
          sx={{ mb: 6, color: 'primary.main', fontWeight: 700 }}
        >
          Înapoi la Meniu
        </Button>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 8,
          alignItems: 'flex-start'
        }}>
          {/* Product Image */}
          <Box sx={{ width: { xs: '100%', md: '45%' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Paper sx={{ 
                borderRadius: '40px', 
                overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(62, 39, 35, 0.15)',
                height: { xs: '350px', md: '500px' }
              }}>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </Paper>
            </motion.div>
          </Box>

          {/* Product Info */}
          <Box sx={{ width: { xs: '100%', md: '55%' } }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Chip 
                label={'sizes' in product ? "Cafea de Specialitate" : "Produs Artizanal"} 
                color="secondary" 
                sx={{ fontWeight: 700, mb: 2 }} 
              />
              <Typography variant="h1" color="primary" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                {product.name}
              </Typography>
              
              <Typography variant="h3" color="warning.main" sx={{ fontWeight: 800, mb: 3 }}>
                {currentPrice}
              </Typography>

              {'sizes' in product && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, opacity: 0.8, textTransform: 'uppercase', letterSpacing: 1 }}>
                    Alege cantitatea:
                  </Typography>
                  <ToggleButtonGroup
                    value={selectedSize}
                    exclusive
                    onChange={handleSizeChange}
                    sx={{ 
                      gap: 2, 
                      display: 'flex',
                      flexWrap: 'wrap',
                      '& .MuiToggleButtonGroup-grouped': { 
                        border: '2px solid !important', 
                        borderColor: 'rgba(62, 39, 35, 0.1) !important',
                        borderRadius: '16px !important',
                        minWidth: '80px'
                      } 
                    }}
                  >
                    {product.sizes.map((size) => (
                      <ToggleButton 
                        key={size.label} 
                        value={size.label}
                        sx={{ 
                          px: 3, 
                          py: 1, 
                          fontWeight: 700,
                          transition: 'all 0.2s',
                          '&.Mui-selected': { 
                            bgcolor: 'primary.main', 
                            color: '#FFF',
                            borderColor: 'primary.main !important',
                            '&:hover': { bgcolor: 'primary.dark' }
                          }
                        }}
                      >
                        {size.label}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>
              )}

              <Button 
                variant="contained" 
                size="large"
                fullWidth
                onClick={() => navigate('/#contact')}
                sx={{ 
                  mb: 6, 
                  py: 2, 
                  borderRadius: '16px', 
                  fontSize: '1.2rem', 
                  fontWeight: 800,
                  boxShadow: '0 10px 25px rgba(62, 39, 35, 0.2)',
                  textTransform: 'none'
                }}
              >
                {'sizes' in product ? "Comandă pentru acasă" : "Rezervă o masă acum"}
              </Button>
              
              <Box sx={{ borderTop: '1px solid rgba(62, 39, 35, 0.1)', pt: 4 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary', mb: 4, whiteSpace: 'pre-line', opacity: 0.9 }}>
                  {product.longDesc}
                </Typography>

                <Paper sx={{ p: 3, borderRadius: '20px', bgcolor: 'rgba(62, 39, 35, 0.03)', border: '1px solid rgba(62, 39, 35, 0.05)', boxShadow: 'none' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1.5, color: 'primary.main' }}>
                    De ce să alegi {product.name}?
                  </Typography>
                  <Stack spacing={1.5}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box component="span" sx={{ width: 6, height: 6, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                      Selecție riguroasă a boabelor de origine
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box component="span" sx={{ width: 6, height: 6, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                      Prăjire artizanală pentru a evidenția aromele
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box component="span" sx={{ width: 6, height: 6, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                      Ambalaj premium ce păstrează prospețimea
                    </Typography>
                  </Stack>
                </Paper>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;
