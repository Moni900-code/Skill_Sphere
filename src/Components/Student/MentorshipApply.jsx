import React from "react";
import { Box, List, ListItem, ListItemText, Button } from "@mui/material";

const MentorshipApply = () => {
  const mentorshipOffers = [
    { id: 1, mentor: "John Doe", skill: "React Basics", description: "Looking for mentees for React." },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Mentorship Offers
      </Typography>
      <List>
        {mentorshipOffers.map((offer) => (
          <ListItem key={offer.id} sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListItemText
              primary={`${offer.skill} by ${offer.mentor}`}
              secondary={offer.description}
            />
            <Button variant="contained" color="primary">
              Apply
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MentorshipApply;
