import React from 'react'
import {Box, Grid, Typography, Divider} from '@mui/material'
type HeaderProps = {
    title: string,
    description: string,
    element?: React.ReactNode | null
}

export  const HeaderComponent: React.FC<HeaderProps> = ({title, description, element}) => {
  return (
    <div>
        <Box sx={{ width:"100%", height:"350px" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{height:"100%"}}
                >
                    <Grid item xs={5}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{height:"100%"}}
                        >
                            <Grid item>
                                <Typography variant='h1'>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{mt:2}}>
                                    {description}
                                </Typography>
                            </Grid>
                            {element !== undefined &&  <Grid item sx={{mt:4}}>{element} </Grid>}
                        </Grid>
                    </Grid>
                </Grid>
        </Box>
        <Divider/>
   </div>
  )
}

