import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography, Box } from '@mui/material';

const ManageReports = () => {
  const [reports, setReports] = useState([
    { id: 1, reporter: "John Doe", reason: "Inappropriate content", status: "Pending" },
    { id: 2, reporter: "Jane Smith", reason: "Harassment", status: "Under Review" },
    { id: 3, reporter: "Alice Johnson", reason: "Spam", status: "Resolved" },
  ]);

  const handleResolve = (id) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: 'Resolved' } : report
    ));
  };

  const handleDismiss = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  return (
    <Box sx={{ bgcolor: '#fff3e0', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#e65100' }}>Manage Reports</Typography>
      <Table sx={{ bgcolor: 'white', boxShadow: 2 }}>
        <TableHead>
          <TableRow sx={{ bgcolor: '#ff9800' }}>
            <TableCell sx={{ color: 'white' }}>Reporter</TableCell>
            <TableCell sx={{ color: 'white' }}>Reason</TableCell>
            <TableCell sx={{ color: 'white' }}>Status</TableCell>
            <TableCell sx={{ color: 'white' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#fff8e1' } }}>
              <TableCell>{report.reporter}</TableCell>
              <TableCell>{report.reason}</TableCell>
              <TableCell>{report.status}</TableCell>
              <TableCell>
                <Button 
                  sx={{ mr: 1, bgcolor: '#4caf50', '&:hover': { bgcolor: '#45a049' } }} 
                  variant="contained"
                  onClick={() => handleResolve(report.id)}
                >
                  Resolve
                </Button>
                <Button 
                  sx={{ bgcolor: '#f44336', '&:hover': { bgcolor: '#d32f2f' } }} 
                  variant="contained"
                  onClick={() => handleDismiss(report.id)}
                >
                  Dismiss
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ManageReports;

