import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import axios from 'axios';

const SessionManagement = () => {
  const [sessions, setSessions] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [newTime, setNewTime] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await axios.get('/api/sessions');
        setSessions(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSessions();
  }, []);

  const handleAddSession = async () => {
    if (newTopic && newTime) {
      try {
        const res = await axios.post('/api/sessions', { topic: newTopic, time: newTime });
        setSessions([...sessions, res.data]);
        setNewTopic('');
        setNewTime('');
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Box sx={{ bgcolor: '#e8f5e9', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#1b5e20' }}>Session Management</Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <TextField 
          label="Session Topic" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <TextField 
          label="Time" 
          fullWidth 
          sx={{ mb: 2 }}
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleAddSession}
          sx={{ bgcolor: '#4caf50', '&:hover': { bgcolor: '#45a049' } }}
        >
          Add Session
        </Button>
      </Paper>
      <List sx={{ bgcolor: 'white', borderRadius: 1, boxShadow: 1 }}>
        {sessions.map((session) => (
          <ListItem key={session._id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <ListItemText 
              primary={session.topic} 
              secondary={new Date(session.time).toLocaleString()}
              primaryTypographyProps={{ fontWeight: 'bold', color: '#1b5e20' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SessionManagement;

