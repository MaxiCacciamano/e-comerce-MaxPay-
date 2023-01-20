// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Item from '../Item/Item';
// import style from './ItemList.module.css'

// const I = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   // ...theme.typography.body2,
//   padding: theme.spacing(1),
//   // textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ItemList({product}) {
//   return (
//     <Box sx={{ width: '100%' }} className={style.b}>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//       {
//           product.map((i) =>{
            
//             return (
//               <Grid item xs={4}>
//               <I>
//                 <Item key={i.id} id={i.id}  name={i.name} image={i.image} category={i.category} price={i.price} code={i.code}/>
//               </I>             
//               </Grid>
//                 )
//               }
//                 )
//               }
//       </Grid>
//     </Box>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '../Item/Item';
import style from './ItemList.module.css'

const I = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// function FormRow() {
//   return (
//     <React.Fragment>
//       <Grid item xs={4}>
//         {
//           product.map((i)=>{
//             return(
//               <I>
//                 <Item key={i.id} id={i.id}  name={i.name} image={i.image} category={i.category} price={i.price} code={i.code}/>
//               </I>
//             )
//           })
//         }
//       </Grid>
//       <Grid item xs={4}>
//         <I>Item</I>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>Item</Item>
//       </Grid>
//     </React.Fragment>
//   );
// }

export default function ItemList({product}) {
  return (
    <Box sx={{ flexGrow: 1 }} className={style.bk} >
      <Grid container spacing={1} >
        <Grid container item spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
                      product.map((i)=>{
                        return(
                          <Grid item xs={4} >
                          {/* <I> */}
                            <Item key={i.id} id={i.id}  name={i.name} image={i.image} category={i.category} price={i.price} code={i.code}/>
                          {/* </I> */}
                          </Grid>
                        )
                      })
          }
          {/* <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />*/}
        </Grid> 
      </Grid>
    </Box>
  );
}