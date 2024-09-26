import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
    const data = [
        {imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'},
        {imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'},
        {imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'},
        {imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'},
        {imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true'},
    ]
  return (
    <div className='flex justify-start flex-row gap-[50px]'>
        {data.map((item, index) => (
          
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
