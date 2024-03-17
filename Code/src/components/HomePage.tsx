import React from 'react';
import { Typography, Container, Paper} from '@mui/material';

export default function HomePage() {

  return (
    <div>
      <Container sx={{ marginTop: '80px', marginBottom: '80px' }}>
        <Paper elevation={3} sx={{ padding: '20px', minHeight: '300px' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to ESG Analytics Platform
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textIndent: '2em' }}>
           Our platform offers a comprehensive solution for bank analysts to assess the ESG performance of companies. By uploading PDF reports, analysts can access a wealth of data extracted from these documents, including ESG scores, financial metrics, and comparative analyses against industry peers.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textIndent: '2em' }}>
            Using state-of-the-art machine learning algorithms, we predict ESG scores and provide detailed insights into areas for improvement. Our report generation mechanism generates benchmark reports in plain English, highlighting key areas where companies can enhance their ESG practices to increase their valuation and brand equity.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textIndent: '2em' }}>
            With our user-friendly interface and powerful analytical capabilities, analysts can make informed investment decisions, identify trends, and evaluate companies commitments to regulatory compliance and sustainability.
          </Typography>
          </Paper>
      </Container>
    </div>
  );
}
