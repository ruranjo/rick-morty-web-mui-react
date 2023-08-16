import React, { useEffect, useState } from 'react'
import {Container, Button, Grid, Box, CircularProgress, Typography, Pagination, Divider} from "@mui/material"
import { CardComponent, HeaderComponent } from '../../components'
import { characters } from '../../api/character'
import { TypeCharacter } from '../../types/typeCharacter'


const HomePage: React.FC<{}> = () => {
  const [countPage, setCountPage] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const [dataCharacters, setDataCharactes] = useState<TypeCharacter[] | null>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  useEffect(() =>{
    setIsLoading(true)
    characters.getAll({page})
    .then((r)=> {  
      setCountPage(r.data.info.pages);
      setDataCharactes(r.data.results);
      setTimeout(() => setIsLoading(false), 1000)
    
    })
    .catch((errer) => console.error(errer))
  },[page])

  const handleChange = (event: React.ChangeEvent<unknown>, value:number) => {
    setPage(value);
  };

  
  return (
    <Container sx={{mt: 9}} maxWidth="xl">
      <HeaderComponent title="Rick and Morty" description="Descubre tus personajes favoritos" 
      element={ <Button variant='contained'>Helloworld</Button> } />

        {
          isLoading ? 
          <Box sx={{display:"flex", justifyContent:"center", mt:4 }}>
            <CircularProgress/>
          </Box>
          :
          <> 
          <div>
            {
            (dataCharacters!.length !== 0)  ? 
              (
                <Grid container spacing={3} >
                    { dataCharacters!.map(({id,name,status, species, image})=>(
                      <Grid item xs={3} key={id}>
                        <CardComponent key={id} name={name} status={status} species={species} image={image} id={id} />
                      </Grid>
                    ))}
               </Grid>
              ): <>hola</>
            }
             
          </div>
          <Divider/>
          <Box sx={{width:"100%", display:"flex", justifyContent:"center",  paddingY:10}} >
                    <Typography>Page: {page}</Typography>
                  <Pagination size='large' sx={{mb:4}} variant='outlined' count={countPage} page={page} onChange={handleChange} />
          </Box>
          </>
        }
        
      
    </Container>
  )
}

export default HomePage

/*


*/