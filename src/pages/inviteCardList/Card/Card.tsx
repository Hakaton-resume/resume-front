import { Box, Stack, Typography } from '@mui/material';
import defAvatar from '../../../assets/defAvatar.png';
import heart from '../../../assets/heart.svg';
import suiltcase from '../../../assets/suilcase.png';
import loc from '../../../assets/location.png';
// import Chips from './Chips/Chips';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/routes/paths';
import { ResumeResponseType } from '../../../redux/slice/resumeSlice';


interface CardProps {
  card: ResumeResponseType;
}

export default function Card({ card }: CardProps) {
  const navigate = useNavigate();
  return (
    <>
      <Stack
      onClick={() => navigate(`${paths.resume}/${card.id}`)}
        width={'316px'}
        height={'204px'}
        display={'flex'}
        flexDirection={'column'}
        p={'16px'}
        gap={'16px'}
        sx={{
          boxShadow: '8px 6px 30px 0px rgba(0, 0, 0, 0.08)',

          boxSizing: 'border-box',
          borderRadius: '12px',
          "&:hover": {
            border: '1px solid #B5B5B7',
          },
          "&:focus": {
            border: '1px solid #1D6BF3',
          }
        }}
      >
        <Stack
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          gap={'7px'}
        >
          <img
            src={defAvatar}
            alt={'avatar'}
            style={{ borderRadius: '50%', width: '64px', height: '64px' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'flex-start',
              gap: '5px',
            }}
          >
            <Typography fontSize={14} fontWeight={700}>
              {card.first_name} {card.last_name}
            </Typography>
            <Typography fontSize={14} fontWeight={500}>
              {card.position}
            </Typography>
            <Typography
              fontSize={12}
              sx={{ p: '5px', bgcolor: '#C2E5CE', borderRadius: '4px' }}
            >
            100% совпадает
            </Typography>
          </Box>
          <img
            src={heart}
            alt={'heart'}
            style={{ width: '20px', height: '20px' }}
          />
        </Stack>
        <Stack sx={{ color: '#959595' }} flexDirection={'column'} gap={'10px'}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
            }}
          >
            <img src={loc} alt="иконка" />
            <Typography fontSize={13} sx={{ alignItems: 'center' }}>
              {card.location}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              paddingBottom: '6px',
            }}
          >
            <img src={suiltcase} alt={'case'} />
            <Typography fontSize={13} sx={{ alignItems: 'center' }}>
              Опыт работы: {card.experience}
            </Typography>
          </Box>
          {/* <Box display={'flex'} flexDirection={'row'} gap={'4px'}>
            {card.skills.map((item) => {
              return <Chips key={item.id} chip={item} />;
            })}
          </Box> */}
        </Stack>
      </Stack>
    </>
  );
}
