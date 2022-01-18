import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import '@fontsource/roboto/700.css';

const Header = () => {
    return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          Dashboard
        </Typography>
        <Button color="inherit">Journal</Button>
        <Button color="inherit">Add entry</Button>
      </Toolbar>
    </AppBar>
  </Box>)
  };
  
  export default Header;
  