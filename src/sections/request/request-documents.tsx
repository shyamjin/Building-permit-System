import React from 'react';

import CardHeader from '@mui/material/CardHeader';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Report, CheckCircle } from '@mui/icons-material';
import {
  Card,
  Table,
  Paper,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  CardContent,
  TableContainer,
} from '@mui/material';

// Example icons

const data = [
  {
    id: '1',
    document: 'Document 1',
    documentType: 'Type A',
    uploadDate: '05/22/2024',
  },
  {
    id: '2',
    document: 'Document 2',
    documentType: 'Type B',
    uploadDate: '03/29/2024',
  },
  // You can add more data here
];

const DocumentTable: React.FC = () => {
  // Handlers for button clicks
  const handleReviewDesign = (document: string) => {
    console.log(`Reviewing design for ${document}`);
    // Add your review logic here
  };

  const handleSystemRecommendations = (document: string) => {
    console.log(`Showing recommendations for ${document}`);
    // Add your recommendations logic here
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader title="Documents Details" sx={{ bgcolor: '#c4cdd5', color: 'white' }} />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Document
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Document Type
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Upload Date
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: 'green.100' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Review Design
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: 'blue.100' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    System Recommendations
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.document}</TableCell>
                  <TableCell>{row.documentType}</TableCell>
                  <TableCell>{row.uploadDate}</TableCell>
                  <TableCell align="center" sx={{ bgcolor: 'green.100' }}>
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<CheckCircle />}
                      onClick={() => handleReviewDesign(row.document)}
                    >
                      Review
                    </Button>
                  </TableCell>
                  <TableCell align="center" sx={{ bgcolor: 'blue.100' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Report />}
                      onClick={() => handleSystemRecommendations(row.document)}
                    >
                      Recommendations
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
export default DocumentTable;
