import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const Privacy = () => {
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
          Politica de Confidențialitate
        </Typography>

        <Box sx={{ bgcolor: '#FFFFFF', p: { xs: 4, md: 6 }, borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>1. Colectarea Datelor</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Colectăm informații pe care ni le furnizați direct atunci când faceți o rezervare (nume, număr de telefon, data rezervării). Aceste date sunt necesare pentru a vă oferi serviciile noastre.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>2. Utilizarea Informațiilor</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Informațiile colectate sunt utilizate exclusiv pentru confirmarea rezervărilor și pentru a îmbunătăți experiența dumneavoastră la Camara Coffee Shop. Nu vindem sau închiriem datele dumneavoastră unor terțe părți.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>3. Securitatea Datelor</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Implementăm măsuri de securitate adecvate pentru a proteja datele dumneavoastră personale împotriva accesului neautorizat sau a modificării.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>4. Drepturile Dumneavoastră</Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Aveți dreptul de a solicita accesul, rectificarea sau ștergerea datelor dumneavoastră personale din baza noastră de date. Ne puteți contacta oricând la salut@camara-coffee.ro pentru orice solicitare.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Privacy;
