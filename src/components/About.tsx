import { Box, Typography, Container, Stack } from '@mui/material';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import interiorImg from '../assets/coffee interiors/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.jpg';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return (
    <Typography variant="h3" color="primary" sx={{ fontWeight: 800 }}>
      <motion.span ref={ref}>{rounded}</motion.span>{suffix}
    </Typography>
  );
};

const About = () => {
  return (
    <Box id="about" sx={{ py: 15, bgcolor: '#FFFFFF', overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          gap: 10 
        }}>
          <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 2 }}>
                Povestea Noastră
              </Typography>
              <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 4, lineHeight: 1.2 }}>
                Mai mult decât o cafea,<br /> o experiență
              </Typography>
              
              <Typography variant="body1" color="text.primary" sx={{ mb: 3, fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
                Camara a luat naștere din pasiunea noastră pentru cafeaua de specialitate și dorința de a crea un spațiu în care timpul pare să stea în loc. Numele nostru reflectă intimitatea și căldura unei case, locul unde te simți cel mai bine.
              </Typography>
              
              <Typography variant="body1" color="text.primary" sx={{ mb: 6, fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
                Lucrăm îndeaproape cu prăjitorii locale pentru a ne asigura că fiecare boabă de cafea care ajunge în ceașca ta este de cea mai înaltă calitate, recoltată etic și prăjită cu măiestrie.
              </Typography>

              <Stack 
                direction="row" 
                spacing={6} 
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <Box>
                  <Counter value={10} suffix="+" />
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>Varietăți</Typography>
                </Box>
                <Box>
                  <Counter value={5000} suffix="+" />
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>Clienți</Typography>
                </Box>
                <Box>
                  <Counter value={2} />
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>Prăjitorii</Typography>
                </Box>
              </Stack>
            </motion.div>
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '50%' }, position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box 
                sx={{ 
                  width: '100%', 
                  height: { xs: '400px', md: '600px' }, 
                  borderRadius: '40px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(62, 39, 35, 0.2)',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <img 
                  src={interiorImg} 
                  alt="Interior Camara" 
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </Box>
              
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: 40, 
                  left: -40, 
                  bgcolor: 'success.main', 
                  p: 4, 
                  borderRadius: '24px',
                  color: '#FFFFFF',
                  zIndex: 4,
                  boxShadow: '0 15px 30px rgba(46, 83, 57, 0.3)',
                  display: { xs: 'none', lg: 'block' },
                  maxWidth: '250px'
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Calitate Garantată</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>Produse 100% naturale și sustenabile direct din fermă.</Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
