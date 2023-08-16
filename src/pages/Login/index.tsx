import React, { useState } from 'react'
import {Container, Button, Grid, Paper, Box, Typography, TextField} from "@mui/material"
import { useNotification } from '../../context/notification.context'
import { LoginValidate } from '../../utils/validateForm'

type LoginType = {
    username: string,
    password: string,
}


const LoginPage: React.FC<{}> = () => {
  const {getError, getSuccess} = useNotification()
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  })

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setLoginData({... loginData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    LoginValidate.validate(loginData).then(() =>getSuccess(JSON.stringify(loginData)))
    .catch(error => getError(error.message))
    
  }
  return (
    <Container  maxWidth="sm">
      <Grid 
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight:"90vh"}}
        >
            <Grid item>
                <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
                    <Typography variant="h4" sx={{mt:1,mb:1}}>Iniciar Sesion</Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        
                        <TextField
                          name='username'
                          margin="normal"
                          type='text'
                          label="Email"
                          sx={{mt:2,mb:1}}
                          fullWidth
                          onChange={dataLogin}
                        />

                        <TextField
                          name='password'
                          margin="normal"
                          type='password'
                          label="Passport"
                          sx={{mt:1,mb:2}}
                          fullWidth
                          onChange={dataLogin}
                        />

                        <Button fullWidth type='submit' variant='contained' sx={{mt:1.5,mb:3}}>Iniciar sesion</Button>
                        
                    </Box>
                </Paper>
            </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage