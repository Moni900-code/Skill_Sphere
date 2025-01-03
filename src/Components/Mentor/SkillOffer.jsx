import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import axios from 'axios';

const SkillOffer = () => {
  const [skillOffers, setSkillOffers] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get('/api/skills');
        setSkillOffers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSkills();
  }, []);

  const handleAddSkill = async () => {
    if (newSkill && newDescription) {
      try {
        const res = await axios.post('/api/skills', { name: newSkill, description: newDescription });
        setSkillOffers([...skillOffers, res.data]);
        setNewSkill('');
        setNewDescription('');
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Box sx={{ bgcolor: '#e0f2f1', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#00695c' }}>Skill Offers</Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <TextField 
          label="Skill Name" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <TextField 
          label="Description" 
          multiline 
          rows={3} 
          fullWidth 
          sx={{ mb: 2 }}
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddSkill}
          sx={{ bgcolor: '#009688', '&:hover': { bgcolor: '#00796b' } }}
        >
          Post Offer
        </Button>
      </Paper>
      <List sx={{ bgcolor: 'white', borderRadius: 1, boxShadow: 1 }}>
        {skillOffers.map((offer) => (
          <ListItem key={offer._id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <ListItemText 
              primary={offer.name} 
              secondary={offer.description}
              primaryTypographyProps={{ fontWeight: 'bold', color: '#00695c' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SkillOffer;

