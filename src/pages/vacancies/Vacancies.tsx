import { Box, Typography } from '@mui/material';
import CustomizedTabs from './Tabs';

export default function Vacancies() {
  return (
    <Box sx={{ padding: '20px 20px' }}>
      <Typography p={'8px 16px'}>JUNIOR FRONTEND</Typography>
      <CustomizedTabs />
    </Box>
  );
}
