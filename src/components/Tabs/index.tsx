import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const CustomTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  outline: 'none',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1A1B22',
  },
});

const CustomTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  fontSize: '16px',
  color: '#B5B5B7',
  '&:hover': {
    color: '#1A1B22',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1A1B22',
    fontWeight: '500',
  },
  '&.Mui-focusVisible': {
    color: '#1A1B22',
    backgroundColor: 'none',
  },
}));

interface StyledTabProps {
  label: string;
}

export default function CustomizedTabs({ onTabChange }: { onTabChange: (newValue: number) => void }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Отклики" />
          <CustomTab label="Избранное" />
          <CustomTab label="Приглашенные" />
          <CustomTab label="Информация о вакансии" />
        </CustomTabs>
      </Box>
    </Box>
  );
}
