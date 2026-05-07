import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi';
import heroImg from '../assets/coffee interiors/close-up-image-man-holds-coffee-with-heart-foam-top-view.jpg';
const Hero = () => {
  return (
    <Box 
      id="home"
      sx={{ 
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(62, 39, 35, 0.5)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        pt: { xs: 12, md: 0 },
        bgcolor: '#3E2723' // Fallback color while image loads
      }}
    >
      {/* Preload Hero Image */}
      <img 
        src={heroImg} 
        alt="" 
        style={{ display: 'none' }} 
        fetchPriority="high" 
        loading="eager" 
      />

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'warning.main', 
              fontWeight: 700, 
              letterSpacing: 4, 
              mb: 2,
              textTransform: 'uppercase' 
            }}
          >
            Camara Coffee Shop
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              color: '#FFFFFF', 
              fontSize: { xs: '3.5rem', md: '6rem' }, 
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 3,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            Cafeaua ta,<br />
            <Box component="span" sx={{ color: 'warning.main' }}>ca acasă</Box>
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontWeight: 400, 
              mb: 5,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Descoperă gustul autentic al cafelei proaspăt prăjite într-o atmosferă caldă și primitoare.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            sx={{ justifyContent: 'center', mb: 8 }}
          >
            <Button 
              variant="contained" 
              size="large"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{ 
                bgcolor: 'warning.main', 
                color: 'primary.main',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                borderRadius: '50px',
                '&:hover': { bgcolor: '#c29668', transform: 'scale(1.05)' },
                transition: 'all 0.3s'
              }}
            >
              Vezi Meniu
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{ 
                borderColor: '#FFFFFF', 
                color: '#FFFFFF',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                borderRadius: '50px',
                borderWidth: '2px',
                '&:hover': { borderColor: 'warning.main', color: 'warning.main', borderWidth: '2px', transform: 'scale(1.05)' },
                transition: 'all 0.3s'
              }}
            >
              Rezervări
            </Button>
          </Stack>
        </motion.div>

        <Box 
          sx={{ 
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: 6,
            mt: 4
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', color: '#FFFFFF', justifyContent: 'center' }}>
              <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex' }}>
                <HiOutlineClock size={28} />
              </Box>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle2" sx={{ opacity: 0.8, letterSpacing: 1 }}>PROGRAM</Typography>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>Luni - Duminică: 08:00 - 22:00</Typography>
              </Box>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', color: '#FFFFFF', justifyContent: 'center' }}>
              <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex' }}>
                <HiOutlineLocationMarker size={28} />
              </Box>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle2" sx={{ opacity: 0.8, letterSpacing: 1 }}>LOCAȚIE</Typography>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>Strada Principală nr. 12, Oraș</Typography>
              </Box>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
