import React from 'react'
import {Box, AppBar, Toolbar, Container, Grid, Typography, Button, Stack} from "@mui/material"
import { useNavigate } from 'react-router-dom'
const NavBar : React.FC<{}> = () => {
  
  const navigate = useNavigate();
  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position='sticky'>
          <Toolbar>
            <Container maxWidth="xl">
                <Grid 
                    container 
                    direction="row" 
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Button onClick={()=> navigate("/rick-morty-web-mui-react.github.io/")} variant='text'><Typography>BY RUBENS</Typography></Button>
                    </Grid>

                    <Grid item>
                        <Stack direction="row" spacing={2}>  
                          <Button variant="contained" onClick={()=> navigate("/rick-morty-web-mui-react.github.io/login")} >Login</Button>
                          <Button variant="outlined">Register</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
          </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar