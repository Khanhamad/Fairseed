import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const col= {
    bor: '#FF9F0A'
  }

  return (
    <Box sx={{ maxWidth: { xs: 620, sm: 1440 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}} label="trending" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satoshi Variable',marginLeft:'0.5rem',fontSize:'14px',fontStyle:'normal'}}  label="Newly added" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satoshi Variable',marginLeft:'0.5rem',fontSize:'14px',fontStyle:'normal'}}  label="Scholarship" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satoshi Variable',marginLeft:'0.5rem',fontSize:'14px',fontStyle:'normal'}}   label="Item Four" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="Item Five" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="Item Six" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="Item Seven" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="trending" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="Newly added" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="Item Three" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="Item Seven" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="trending" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}   label="Newly added" />
        <Tab style={{color:'var(--cool-grey-cool-grey-10, #383A42)',borderRadius: 'var(--Spacing-24, 24px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satoshi Variable',fontSize:'14px',fontStyle:'normal'}}     label="Item Three" />
      </Tabs>
    </Box>
  );
}