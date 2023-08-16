import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { characters } from '../../api/character';
import { TypeCharacter } from '../../types/typeCharacter';
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';

const CharacterPage: React.FC<{}> = () => {
    const {id} = useParams()
    const [infoCharacter, setInfoCharacter] = useState<TypeCharacter | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() =>{
        characters.getById({id})
        .then((r)=> {  
            setInfoCharacter(r.data)
            setIsLoading(false)
        })
        .catch((errer) => console.error(errer))
      },[])

    return (
        <Box sx={{width:"100%"}}>
            <Container maxWidth="xl">
            {
          isLoading ? 
          <Box sx={{display:"flex", justifyContent:"center", mt:4 }}>
            <CircularProgress/>
          </Box>
          :
          <Grid sx={{mt:2}} container columnSpacing={2}>
                <Grid item xs={6}>
                    <Typography variant='h1'>
                        {infoCharacter!.name}
                    </Typography>
                    <Divider/>
                    <Typography variant='h6'>
                        {infoCharacter!.origin.name}
                    </Typography>
                    <Box>
                        <Chip color="primary" variant='outlined' label={infoCharacter!.status}/>
                            
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src={infoCharacter!.image} style={{width:"100%", borderRadius:"0.5em"}} alt="" />
                </Grid>
          </Grid>
        }
            </Container>
        </Box>
    )
}

export default CharacterPage; 