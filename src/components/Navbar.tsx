import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container
} from '@mui/material';
import { HiMenu } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logowithoutborder.svg';

const navItems = [
  { name: 'Acasă', id: 'home' },
  { name: 'Meniu', id: 'menu' },
  { name: 'Magazin', id: 'shop' },
  { name: 'Despre Noi', id: 'about' },
  { name: 'Galerie', id: 'gallery' },
  { name: 'Recenzii', id: 'recenzii' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const lenis = (window as any).lenis;

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element && lenis) {
          lenis.scrollTo(element, { offset: -80, duration: 1.5 });
        } else if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element && lenis) {
        lenis.scrollTo(element, { offset: -80, duration: 1.5 });
      } else if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'background.default', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
        <img src={logo} alt="Camara Logo" style={{ height: '80px' }} />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{ textAlign: 'center', borderRadius: 2, mb: 1 }}
            >
              <ListItemText
                primary={<Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => scrollToSection('contact')}
      >
        Rezervă
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 2 : 0}
        sx={{
          bgcolor: isScrolled || location.pathname !== '/' ? 'rgba(245, 237, 224, 0.95)' : 'transparent',
          backdropFilter: isScrolled || location.pathname !== '/' ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: isScrolled || location.pathname !== '/' ? '1px solid rgba(62, 39, 35, 0.1)' : 'none'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', height: { xs: '90px', md: '120px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
              <img src={logo} alt="Camara Logo" style={{ height: isScrolled ? '70px' : '100px', transition: 'height 0.3s' }} />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Typography
                  key={item.id}
                  variant="body1"
                  component="a"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '0',
                      height: '2px',
                      bottom: '-4px',
                      left: '0',
                      backgroundColor: 'secondary.main',
                      transition: 'width 0.3s'
                    },
                    '&:hover:after': {
                      width: '100%'
                    }
                  }}
                >
                  {item.name}
                </Typography>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={() => scrollToSection('contact')}
                sx={{
                  borderRadius: '50px',
                  boxShadow: '0 4px 14px 0 rgba(62, 39, 35, 0.39)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(62, 39, 35, 0.23)',
                  }
                }}
              >
                Rezervări
              </Button>
            </Box>

            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <HiMenu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, bgcolor: 'background.default' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
