import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button, Divider} from '@mui/material'
import { useNavigate } from 'react-router-dom'

type CardProps = {
    name: string,
    status: string,
    species: string,
    image: string,
    id:number,
}

export const CardComponent: React.FC<CardProps> = ({name,status,species,image,id}) => {
  const navigate = useNavigate()
  return (
    <Card >
        <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography  sx={{mb:1.5}} variant='h3'>
            {name}
        </Typography>
        <Divider/>
        <Typography sx={{mt:1.5}}>
            Estado: {status}
        </Typography>
        <Typography sx={{mt:1.5}}>
            Especie: {species}
        </Typography>
      </CardContent>
        <CardActions>
            <Button fullWidth variant='contained' size="small" onClick={()=>navigate(`/character/${id}`)}>Learn More</Button>
        </CardActions>
    </Card>
  )
}

