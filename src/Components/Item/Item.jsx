// import React from 'react'
// import { Link } from 'react-router-dom';
// import style from'./Item.module.css'

// export const Item = ({name, image, CODE,category, price,id }) => {
//   return (
//     <div className={style.item}>
//         <h2>{name}</h2>
//         <div className={style.desc}>  
//         <div className="i-product">
//             <img src={image}/>
//         </div>
//         <p>category: {category}</p>
//         <p>${price}</p> 
//         <Link to={`/item/${id}`}> 
//            <button>ver mas detalles</button>
//         </Link>
//         </div>
//     </div>
//   )
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';
import style from "./Item.module.css"

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Item({name, image, CODE,category, price,id, code }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <div className={style.nam}>
                 {name}
                </div>
              </Typography>
              <Typography variant="body2" gutterBottom>
                {/* Full resolution 1920x1080 • JPEG */}
                {category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID:{code}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <Link to={`/item/${id}`} className={style.buto}> 
                    ver mas detalles
                  </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}