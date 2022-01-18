import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Grid, Typography } from '@mui/material';


  
const Main = (props) => {
    return (
        <>
      <Grid container sx={{ px: "20%" }}>
        <Grid item xs>
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ my: 2, mx: 2 }}>
                <Typography variant="h6" component="div">
                  INCOMING
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem sx ={{bgcolor:"#FFFFFF"}}>
              <ListItemText sx={{ textAlign: "right", height: "50px" }}>
                <Typography sx={{ color: "#1CE800" }}>+$1000</Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                  1 day consulting
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx ={{bgcolor:"#EFF3F8"}}>
              <ListItemText sx={{ textAlign: "right", height: "50px" }}>
                <Typography sx={{ color: "#1CE800" }}><div>&nbsp;</div></Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                <div>&nbsp;</div>
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography variant="h6" component="div">
                  TOTAL
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>

        {/* RIGHT */}

        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ my: 2, mx: 2 }}>
                <Typography variant="h6" component="div">
                  OUTGOING
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem sx ={{bgcolor:"#FFFFFF"}}>
              <ListItemText sx={{ textAlign: "right", height: "50px" }}>
                <Typography sx={{ color: "#1CE800" }}>
                  <div>&nbsp;</div>
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                  <div>&nbsp;</div>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx ={{bgcolor:"#EFF3F8"}}>
              <ListItemText sx={{ textAlign: "right", height: "50px" }}>
                <Typography sx={{ color: "#F33731" }}>
                  -$2000
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                  2 day consulting
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography variant="h6" component="div">
                  TOTAL
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
    );
  };
  
  export default Main;
  