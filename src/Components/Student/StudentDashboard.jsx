import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import SessionJoin from './Student/SessionJoin';
import SkillRequest from './Student/SkillRequest';

const StudentDashboard = () => {
  return (
    <Box sx={{ bgcolor: '#e3f2fd', minHeight: '100vh', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, bgcolor: '#bbdefb', maxWidth: 800, margin: '0 auto' }}>
        <Typography variant="h4" sx={{ mb: 3, color: '#1565c0', textAlign: 'center' }}>
          Student Dashboard
        </Typography>
        <Box sx={{ mb: 3 }}>
          <SessionJoin />
        </Box>
        <Box>
          <SkillRequest />
        </Box>
      </Paper>
    </Box>
  );
};

export default StudentDashboard;
