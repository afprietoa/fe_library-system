import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GiBookmarklet } from "react-icons/gi";
import {Link} from 'react-router-dom';
import { Button, Stack } from '@mui/material';

import { useNavigate} from 'react-router-dom';

const lightTheme = createTheme({
  palette: {
      mode:'dark'
  }
})

const AppNavBar = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={lightTheme}>
    <AppBar position="static" className="app-bar">
      <Container className="container-bar">
        


        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 0,
          m: 0,
          borderRadius: 1,
        }}
      >

        
        <Box 
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 0,
          m: 0,
        }}
          >

          <GiBookmarklet fontSize='3rem' sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          
          <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Essence 
            
          </Typography> 
          <Typography variant="caption" display="block" gutterBottom>
            Reading
            </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={2}>
      <Button 
      color="success"
      onClick={() => navigate("/home")}
      >
        HOME
      </Button>
      <Button 
      color="success"
      onClick={() => navigate("/landing")}
      >
        BOOKS
      </Button>
    </Stack>
          <Box 
                sx={{
                  p: 0,
                  m: 0,
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                  color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                  border: '1px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'center',

                }}
          >
           
          <Link to='/register' className=''>Login/Register</Link> 
          </Box>
        </Box>

      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default AppNavBar;