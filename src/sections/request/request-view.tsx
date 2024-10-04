import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RequestNew } from './request-new';
import {UserView} from "../user/view";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function RequestView() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" sx={{ bgcolor: 'rgb(218 225 232 / 29%)', color: '#16181a' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            sx={{ display: 'flex', alignItems: 'center' }}
            label={
              <Badge badgeContent="1" color="error" sx={{ marginLeft: '5px' }}>
                New
              </Badge>
            }
            {...a11yProps(0)}
          />
          <Tab
            sx={{ display: 'flex', alignItems: 'center' }}
            label={
              <Badge badgeContent="5" color="success" sx={{ marginLeft: '5px' }}>
                In Progress
              </Badge>
            }
            {...a11yProps(0)}
          />
          <Tab
            sx={{ display: 'flex', alignItems: 'center' }}
            label={
              <Badge badgeContent="12" color="info" sx={{ marginLeft: '5px' }}>
                Completed
              </Badge>
            }
            {...a11yProps(0)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <RequestNew />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <UserView/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
