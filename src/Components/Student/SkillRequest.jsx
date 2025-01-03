import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

const SkillRequest = () => {
  const [skillName, setSkillName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (skillName && description) {
      try {
        await axios.post('/api/skills/request', { name: skillName, description });
        setSkillName('');
        setDescription('');
        // Show success message
      } catch (err) {
        console.error(err);
        // Show error message
      }
    }
  };

  return (
    <Box sx={{ bgcolor: '#e8eaf6', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#303f9f' }}>Request a Skill</Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Skill Name" 
            fullWidth 
            sx={{ mb: 2 }} 
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            required
          />
          <TextField 
            label="Description" 
            multiline 
            rows={3} 
            fullWidth 
            sx={{ mb: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ bgcolor: '#3f51b5', '&:hover': { bgcolor: '#303f9f' } }}
          >
            Submit Request
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SkillRequest;

