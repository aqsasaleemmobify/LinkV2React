import React from 'react';
import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import '../App.css'; // Make sure this includes .footer classes

const Footer = () => {
  const links = [
    "About",
    "How It Works",
    "Pricing",
    "Terms & Privacy",
    "Contact",
  ];

  return (
    <Box component="footer" className="footer-root">
      <Grid container spacing={2} className="footer-links">
        {links.map((item, i) => (
          <Grid item xs={6} sm={4} md={2.4} key={i} className="footer-link-item">
            <MuiLink
              href="#"
              underline="hover"
              color="inherit"
              className="footer-link"
            >
              {item}
            </MuiLink>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body2" className="footer-bottom-text">
        <p>

        © 2025 Link2VA | Powered by MorphicBrain
        </p>
      </Typography>
    </Box>
  );
};

export default Footer;
