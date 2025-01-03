import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users');
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const handleDeactivate = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ bgcolor: '#f0f4f8', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#1a237e' }}>Manage Users</Typography>
      <Table sx={{ bgcolor: 'white', boxShadow: 2 }}>
        <TableHead>
          <TableRow sx={{ bgcolor: '#3f51b5' }}>
            <TableCell sx={{ color: 'white' }}>Name</TableCell>
            <TableCell sx={{ color: 'white' }}>Email</TableCell>
            <TableCell sx={{ color: 'white' }}>Role</TableCell>
            <TableCell sx={{ color: 'white' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#e8eaf6' } }}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button 
                  sx={{ mr: 1, bgcolor: '#4caf50', '&:hover': { bgcolor: '#45a049' } }} 
                  variant="contained"
                >
                  Edit
                </Button>
                <Button 
                  sx={{ bgcolor: '#f44336', '&:hover': { bgcolor: '#d32f2f' } }} 
                  variant="contained"
                  onClick={() => handleDeactivate(user._id)}
                >
                  Deactivate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ManageUsers;

