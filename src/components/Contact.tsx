import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button, 
  Stack, 
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import beanSticker from '../assets/stickers/coffee-bean.png';
import coffeeIcon from '../assets/stickers/coffee.png';

const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Mesaj trimis! Vă vom contacta în curând pentru confirmare.');
  };

  return (
    <Box id="contact" sx={{ py: 15, bgcolor: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Stickers */}
      <Box 
        component={motion.img}
        src={coffeeIcon}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        sx={{ position: 'absolute', top: '10%', right: '2%', width: '100px', opacity: 0.1 }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 2 }}>
            Contact & Rezervări
          </Typography>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            Te așteptăm la o cafea
          </Typography>
          <Box sx={{ width: '80px', height: '4px', bgcolor: 'warning.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          gap: 8,
          alignItems: 'flex-start'
        }}>
          <Box sx={{ width: { xs: '100%', lg: '40%' } }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" color="primary" sx={{ fontWeight: 800, mb: 5, textAlign: { xs: 'center', lg: 'left' } }}>
                Informații de Contact
              </Typography>
              
              <Stack spacing={4}>
                {[
                  { icon: <HiOutlineLocationMarker size={28} />, title: 'Locație', detail: 'Piața Romană, București, România' },
                  { icon: <HiOutlinePhone size={28} />, title: 'Telefon', detail: '+40 722 000 000' },
                  { icon: <HiOutlineMail size={28} />, title: 'Email', detail: 'salut@camara-coffee.ro' },
                ].map((item, i) => (
                  <Stack 
                    key={i} 
                    direction="row" 
                    spacing={{ xs: 2, md: 3 }} 
                    sx={{ 
                      alignItems: 'center', 
                      justifyContent: 'flex-start',
                      maxWidth: { xs: '320px', sm: '100%' },
                      mx: { xs: 'auto', lg: 0 }
                    }}
                  >
                    <Box sx={{ 
                      p: { xs: 1.5, md: 2 }, 
                      borderRadius: '20px', 
                      bgcolor: 'background.default', 
                      color: 'primary.main', 
                      display: 'flex' 
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{item.title}</Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}>{item.detail}</Typography>
                    </Box>
                  </Stack>
                ))}

                <Stack 
                  direction="row" 
                  spacing={{ xs: 2, md: 3 }} 
                  sx={{ 
                    alignItems: 'flex-start', 
                    justifyContent: 'flex-start',
                    maxWidth: { xs: '320px', sm: '100%' },
                    mx: { xs: 'auto', lg: 0 }
                  }}
                >
                  <Box sx={{ 
                    p: { xs: 1.5, md: 2 }, 
                    borderRadius: '20px', 
                    bgcolor: 'background.default', 
                    color: 'primary.main', 
                    display: 'flex' 
                  }}>
                    <HiOutlineClock size={28} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>Program</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Luni - Vineri: 08:00 - 20:00</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Sâmbătă - Duminică: 09:00 - 22:00</Typography>
                  </Box>
                </Stack>
              </Stack>

              <Box sx={{ mt: 8, borderRadius: '30px', overflow: 'hidden', height: '300px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d26.097277626335515!3d44.445838015693255!2m2!1f0!2f90!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x40b1ff4e5e4c4e2f%3A0xabd56fc7586c7121!2zUGlhyJthIFJvbWFuxIMsIEJ1Y3VyZciZdGk!4v1778432211177" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ width: { xs: '100%', lg: '60%' } }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper sx={{ 
                p: { xs: 4, md: 8 }, 
                borderRadius: '40px', 
                bgcolor: 'background.default',
                boxShadow: '0 30px 60px rgba(62, 39, 35, 0.1)'
              }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 800, mb: 2, textAlign: 'center' }}>
                  Rezervă o Masă
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center', fontSize: '1.1rem' }}>
                  Te rugăm să completezi formularul de mai jos și echipa noastră va reveni cu o confirmare.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                      <TextField fullWidth label="Nume Complet" variant="outlined" required />
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                      <TextField fullWidth label="Telefon" variant="outlined" required />
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                      <TextField fullWidth label="Data" type="date" slotProps={{ inputLabel: { shrink: true } }} variant="outlined" required />
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                      <TextField fullWidth label="Nr. Persoane" type="number" variant="outlined" required />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                      <TextField fullWidth label="Mesaj sau Preferințe" multiline rows={4} variant="outlined" />
                    </Box>
                    <Box sx={{ width: '100%', mt: 2 }}>
                      <Button 
                        fullWidth 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        sx={{ 
                          py: 2.5, 
                          fontSize: '1.2rem', 
                          fontWeight: 800,
                          borderRadius: '16px',
                          boxShadow: '0 10px 25px rgba(62, 39, 35, 0.2)',
                          '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 15px 35px rgba(62, 39, 35, 0.3)' },
                          transition: 'all 0.3s'
                        }}
                      >
                        Trimite Rezervarea
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Floating Bean Sticker */}
      <Box 
        component={motion.img}
        src={beanSticker}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        sx={{ position: 'absolute', bottom: '5%', left: '2%', width: '70px', opacity: 0.1 }}
      />
    </Box>
  );
};

export default Contact;
