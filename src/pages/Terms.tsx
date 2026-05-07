import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 15, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Button 
          startIcon={<HiArrowLeft />} 
          onClick={() => navigate('/')}
          sx={{ mb: 4, color: 'primary.main', fontWeight: 700 }}
        >
          Înapoi la Acasă
        </Button>
        
        <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 4 }}>
          Termeni și Condiții
        </Typography>

        <Box sx={{ bgcolor: '#FFFFFF', p: { xs: 4, md: 6 }, borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>1. Acceptarea Termenilor</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Prin accesarea și utilizarea site-ului Camara Coffee Shop, sunteți de acord să respectați acești termeni și condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul nostru.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>2. Rezervări</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Rezervările efectuate prin intermediul site-ului nostru sunt supuse disponibilității și confirmării din partea echipei noastre. Ne rezervăm dreptul de a refuza sau anula rezervările în anumite circumstanțe.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>3. Proprietate Intelectuală</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Toate materialele de pe acest site, incluzând designul, textele și imaginile, sunt proprietatea Camara Coffee Shop sau a partenerilor săi și sunt protejate de legile dreptului de autor.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>4. Limitarea Răspunderii</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Camara Coffee Shop nu va fi responsabilă pentru nicio daună directă, indirectă sau accidentală rezultată din utilizarea sau incapacitatea de a utiliza serviciile noastre online.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Terms;
