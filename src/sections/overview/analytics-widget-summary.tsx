import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

import { varAlpha, bgGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  total: string;
};

export function AnalyticsWidgetSummary({ title, total, sx, ...other }: Props) {
  const theme = useTheme();

  return (
    <Card
      key={title}
      sx={{
        ...bgGradient({
          color: `135deg, ${varAlpha('white', 0.48)}, ${varAlpha('white', 0.48)}`,
        }),
        p: 2,
        boxShadow: 'none',
        position: 'relative',
        backgroundColor: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: 112 }}>
          <Box sx={{ mb: 1, typography: 'subtitle2' }}>{title}</Box>
          <Box sx={{ typography: 'h4' }}>{total}</Box>
        </Box>
      </Box>
    </Card>
  );
}
