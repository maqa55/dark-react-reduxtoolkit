import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { useSelector } from 'react-redux';

const Footer = () => {
  const mode = useSelector((state) => state.mode.mode);  

  return (
    <div className={`${mode}`} style={{ width: '100%' }}>
      <footer style={{
        backgroundColor: mode === "dark" ? 'black' : 'gray',
        color: mode === "dark" ? 'gray' : 'black',  
        padding: '20px 0',
        boxSizing: 'border-box', 
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" align="left">
                My Website
              </Typography>
              <Typography variant="body2" align="left">
                © {new Date().getFullYear()} My Website. All rights reserved.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} container justifyContent="flex-end">
              <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
                Terms of Service
              </Link>
              <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
