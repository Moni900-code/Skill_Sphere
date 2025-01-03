import React, { useState, useEffect } from 'react';
import { Box, Button, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import axios from 'axios';

const SessionJoin = () => {
  const [sessions, setSessions] = useState([]);

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

  const handleJoinSession = async (sessionId) => {
    try {
      await axios.post(`/api/sessions/${sessionId}/join`);
      // Update UI or show confirmation
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ bgcolor: '#e1f5fe', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#0277bd' }}>Available Sessions</Typography>
      <List sx={{ bgcolor: 'white', borderRadius: 1, boxShadow: 1 }}>
        {sessions.map((session) => (
          <ListItem key={session._id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <ListItemText 
              primary={session.topic} 
              secondary={new Date(session.time).toLocaleString()}
              primaryTypographyProps={{ fontWeight: 'bold', color: '#0277bd' }}
            />
            <Button 
              variant="contained" 
              onClick={() => handleJoinSession(session._id)}
              sx={{ bgcolor: '#03a9f4', '&:hover': { bgcolor: '#0288d1' } }}
            >
              Join
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SessionJoin;

