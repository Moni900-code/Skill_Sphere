import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import ManageUsers from './Admin/ManageUsers';
import ManageReports from './Admin/ManageReports';

const AdminDashboard = () => {
  return (
    <Box sx={{ bgcolor: '#e8eaf6', minHeight: '100vh', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, bgcolor: '#c5cae9' }}>
        <Typography variant="h4" sx={{ mb: 3, color: '#283593' }}>Admin Dashboard</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ManageUsers />
          </Grid>
          <Grid item xs={12} md={6}>
            <ManageReports />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;

