import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Dashboard, Person, School, Work } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/sessions">
          <ListItemIcon><School /></ListItemIcon>
          <ListItemText primary="Sessions" />
        </ListItem>
        <ListItem button component={Link} to="/skills">
          <ListItemIcon><Work /></ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

