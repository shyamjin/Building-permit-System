import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _cunsultentInfo } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { UserView } from '../../user/view';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Welcome, Arihant
      </Typography>
      <Grid container spacing={3}>
        {(Object.keys(_cunsultentInfo) as (keyof typeof _cunsultentInfo)[]).map((key) => {
          const formattedKey = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase()); // Format key
          return (
            <Grid xs={12} sm={6} md={3}>
              <AnalyticsWidgetSummary key={key} title={formattedKey} total={_cunsultentInfo[key]} />
            </Grid>
          );
        })}
        <UserView />
      </Grid>
    </DashboardContent>
  );
}
