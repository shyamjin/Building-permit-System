import Grid from '@mui/material/Unstable_Grid2';

import { DashboardContent } from 'src/layouts/dashboard';

import GridExample from './destail-grid';
import { _cunsultentInfo } from '../../_mock';
import FormComponent from '../user/common_user';
import DocumentTable from './request-documents';
import { AnalyticsWidgetSummary } from '../overview/analytics-widget-summary';

// ----------------------------------------------------------------------

export function RequestNew() {
  return (
    <DashboardContent maxWidth="xl">
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
        <Grid xs={12} sm={6} md={12}>
          <FormComponent />
        </Grid>
        <Grid xs={12} sm={6} md={12}>
          <DocumentTable />
        </Grid>
        <Grid xs={12} sm={6} md={12}>
          <GridExample />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
