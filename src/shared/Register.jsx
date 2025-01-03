import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, MenuItem } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', { name, email, password, role });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      // Show error message
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#e8eaf6' }}>
      <Paper elevation={3} sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', color: '#303f9f' }}>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Name" 
            fullWidth 
            sx={{ mb: 2 }} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField 
            label="Email" 
            type="email" 
            fullWidth 
            sx={{ mb: 2 }} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            select
            label="Role"
            fullWidth
            sx={{ mb: 2 }}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="mentor">Mentor</MenuItem>
          </TextField>
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth
            sx={{ bgcolor: '#3f51b5', '&:hover': { bgcolor: '#303f9f' } }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;

