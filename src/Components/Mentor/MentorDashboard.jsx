import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import SessionManagement from './Mentor/SessionManagement';
import SkillOffer from './Mentor/SkillOffer';

const MentorDashboard = () => {
  return (
    <Box sx={{ bgcolor: '#e8f5e9', minHeight: '100vh', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, bgcolor: '#c8e6c9' }}>
        <Typography variant="h4" sx={{ mb: 3, color: '#2e7d32' }}>Mentor Dashboard</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SessionManagement />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillOffer />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MentorDashboard;

