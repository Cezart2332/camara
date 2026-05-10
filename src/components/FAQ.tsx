import { 
  Box, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import { HiChevronDown } from 'react-icons/hi';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Unde vă aflați exact?",
    answer: "Ne găsiți în Piața Romană, chiar în inima Bucureștiului."
  },
  {
    question: "Aveți opțiuni de cafea decofeinizată?",
    answer: "Da, oferim o selecție excelentă de cafea decofeinizată procesată natural, care păstrează întreaga aromă a boabelor de specialitate."
  },
  {
    question: "Pot face o rezervare pentru un grup mai mare?",
    answer: "Desigur! Pentru grupuri mai mari de 6 persoane, vă rugăm să ne contactați telefonic sau prin formularul de rezervări cu cel puțin 24 de ore înainte."
  },
  {
    question: "Oferiți lapte vegetal?",
    answer: "Da, punem la dispoziție lapte de ovăz, migdale și soia pentru toate băuturile noastre pe bază de cafea."
  },
  {
    question: "Aveți produse fără gluten?",
    answer: "Avem câteva opțiuni de deserturi fără gluten, însă vă rugăm să întrebați baristul despre disponibilitatea zilnică, deoarece meniul nostru de deserturi se schimbă frecvent."
  }
];

const FAQ = () => {
  return (
    <Box id="faq" sx={{ py: 15, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 2 }}>
            Întrebări Frecvente
          </Typography>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            Tot ce trebuie să știi
          </Typography>
          <Box sx={{ width: '80px', height: '4px', bgcolor: 'warning.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              sx={{ 
                mb: 2, 
                borderRadius: '20px !important',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                '&:before': { display: 'none' },
                bgcolor: '#FFFFFF',
                overflow: 'hidden'
              }}
            >
              <AccordionSummary
                expandIcon={<HiChevronDown size={24} color="#8B5E3C" />}
                sx={{ p: 3 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ;
