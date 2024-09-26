import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

export default function ImgMediaCard({ genero, shoeType }) {
    const data = [
        {genero: 'masculino', tipo: 'tenis', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'},
    ]

    const data2 = {
      masculino: {
        tenis: [
          {marca: 'nike', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'},
          {marca: 'nike', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'}
        ]
      },
      feminino: {
        sapatilha: [
          {marca: 'modare',  imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'}
        ]
      }
    }

    useEffect(() => {
      const dados = data2[genero][shoeType]
      console.log(dados)
      console.log(shoeType)
    })

  return (
    <div className='flex justify-start flex-row gap-[50px] flex-wrap'>
        {data2.map((item, index) => (
          <Card key={index} sx={{ width: 250 }}>
            key={}
            <CardMedia 
              component="img"
              alt="Tênis"
              image={item.imageUrl}
              sx={{
                  height: 150,
                  objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
              ))}
    </div>
  );
}
