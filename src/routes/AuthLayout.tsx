import { Box, Stack, Paper, Typography } from '@mui/material';
import background from '../assets/background.png';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <Box
      component={'div'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Paper
        sx={{
          boxSizing: 'border-box',
          padding: '36px 28px 40px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          sx={{
            minWidth: '270px',
            maxWidth: '350px',
          }}
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
        >
          <Outlet />
        </Stack>
      </Paper>
      <Stack
        mt={'12px'}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        gap={'5px'}
      >
        <Typography
          sx={{ fontSize: '14px', color: '#DDE0E4', lineHeight: '20px' }}
        >
          Новый пользователь?
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#FFFFFF' }}>
          Зарегистрироваться
        </Typography>
      </Stack>
    </Box>
  );
}
