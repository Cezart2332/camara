import { Box, Typography, Container, IconButton, Stack, Link, Divider, Button } from '@mui/material';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logowithoutborder.svg';
import coffeeIcon from '../assets/stickers/coffee.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#FFFFFF', pt: 12, pb: 6, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Sticker */}
      <Box 
        component="img"
        src={coffeeIcon}
        sx={{ 
          position: 'absolute', 
          top: -20, 
          right: -20, 
          width: '150px', 
          opacity: 0.05,
          filter: 'brightness(0) invert(1)' 
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 10,
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Box sx={{ maxWidth: '350px' }}>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <img src={logo} alt="Camara Logo" style={{ height: '80px', filter: 'brightness(0) invert(1)' }} />
            </Box>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Cafeaua ta, ca acasă. Un spațiu dedicat iubitorilor de cafea de specialitate și gusturilor autentice.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <IconButton 
                  key={i}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    color: '#FFFFFF', 
                    width: 50,
                    height: 50,
                    '&:hover': { bgcolor: 'warning.main', color: 'primary.main', transform: 'translateY(-5px)' },
                    transition: 'all 0.3s'
                  }}
                >
                  <Icon size={22} />
                </IconButton>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1 }}>LINK-URI UTILE</Typography>
            <Stack spacing={2} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
              {['Acasă', 'Meniu', 'Despre', 'Galerie', 'Recenzii', 'FAQ', 'Contact'].map((text, index) => (
                <Link
                  key={text}
                  component="button"
                  variant="body1"
                  onClick={() => scrollToSection(['home', 'menu', 'about', 'gallery', 'recenzii', 'faq', 'contact'][index])}
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    textDecoration: 'none', 
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': { color: 'warning.main', transform: 'translateX(5px)', transition: '0.3s' } 
                  }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box sx={{ maxWidth: '350px', width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1 }}>LEGAL</Typography>
            <Stack spacing={2} sx={{ alignItems: { xs: 'center', md: 'flex-start' }, mb: 4 }}>
              <Link
                component={RouterLink}
                to="/termeni"
                variant="body1"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  textDecoration: 'none', 
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': { color: 'warning.main', transform: 'translateX(5px)', transition: '0.3s' } 
                }}
              >
                Termeni și Condiții
              </Link>
              <Link
                component={RouterLink}
                to="/confidentialitate"
                variant="body1"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  textDecoration: 'none', 
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': { color: 'warning.main', transform: 'translateX(5px)', transition: '0.3s' } 
                }}
              >
                Politică de Confidențialitate
              </Link>
            </Stack>
            
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1 }}>NEWSLETTER</Typography>
            <Box sx={{ 
              display: 'flex', 
              bgcolor: 'rgba(255,255,255,0.08)', 
              borderRadius: '16px', 
              p: 1,
              border: '1px solid rgba(255,255,255,0.1)',
              '&:focus-within': { borderColor: 'warning.main' }
            }}>
              <Box 
                component="input" 
                placeholder="Emailul tău" 
                sx={{ 
                  bgcolor: 'transparent', 
                  border: 'none', 
                  color: '#FFFFFF', 
                  px: 2, 
                  flex: 1,
                  fontSize: '1rem',
                  outline: 'none',
                  '&::placeholder': { color: 'rgba(255,255,255,0.4)' }
                }} 
              />
              <Button variant="contained" color="warning" sx={{ color: 'primary.main', fontWeight: 800, px: 3, borderRadius: '12px' }}>OK</Button>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 8, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ textAlign: 'center', opacity: 0.6 }}>
          <Typography variant="body2" sx={{ letterSpacing: 0.5 }}>
            © {currentYear} Camara Coffee Shop. Toate drepturile rezervate.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
