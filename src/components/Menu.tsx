import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Tabs, 
  Tab, 
  Avatar,
  Button
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { menuData } from '../data';

// Stickers
import coffeeIcon from '../assets/stickers/coffee.png';
import teaIcon from '../assets/stickers/hot-tea.png';
import dessertIcon from '../assets/stickers/drink.png';
import beanSticker from '../assets/stickers/coffee-bean.png';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (_event: any, newValue: number) => {
    setActiveTab(newValue);
  };

  const categories = [
    { label: 'Cafea de Specialitate', key: 'coffee', icon: coffeeIcon },
    { label: 'Selecție de Ceaiuri', key: 'teas', icon: teaIcon },
    { label: 'Deserturi Artizanale', key: 'desserts', icon: dessertIcon }
  ];

  return (
    <Box id="menu" sx={{ py: 12, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Stickers */}
      <Box 
        component={motion.img}
        src={beanSticker}
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        sx={{ position: 'absolute', top: '10%', right: '5%', width: '60px', opacity: 0.1 }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 2 }}>
            Meniul Nostru
          </Typography>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            Arome alese pentru tine
          </Typography>
          <Box sx={{ width: '80px', height: '4px', bgcolor: 'warning.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': { height: 4, borderRadius: 2, bgcolor: 'primary.main' },
              '& .MuiTab-root': { 
                fontWeight: 800, 
                fontSize: '1.1rem', 
                px: 4, 
                color: 'rgba(62, 39, 35, 0.5)',
                '&.Mui-selected': { color: 'primary.main' }
              }
            }}
          >
            {categories.map((cat) => (
              <Tab 
                key={cat.key} 
                label={cat.label} 
                icon={<Avatar src={cat.icon} sx={{ width: 32, height: 32, mb: 1, bgcolor: 'transparent' }} />}
                iconPosition="top"
              />
            ))}
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 4 
            }}>
              {(menuData as any)[categories[activeTab].key].map((item: any, index: number) => (
                <Card 
                  key={index}
                  sx={{ 
                    width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 22px)' },
                    bgcolor: 'background.paper', 
                    borderRadius: '24px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(62, 39, 35, 0.15)'
                    },
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <Box sx={{ 
                      position: 'absolute', 
                      bottom: 16, 
                      right: 16, 
                      bgcolor: 'warning.main', 
                      color: 'primary.main', 
                      px: 2, 
                      py: 0.5, 
                      borderRadius: '12px',
                      fontWeight: 800,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                      {item.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 800, mb: 1 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, mb: 3 }}>
                      {item.desc}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => navigate(`/produs/${item.slug}`)}
                      sx={{ 
                        borderRadius: '50px', 
                        mt: 'auto',
                        fontWeight: 700,
                        borderWidth: '2px',
                        '&:hover': { borderWidth: '2px' }
                      }}
                    >
                      Detalii Produs
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Menu;
