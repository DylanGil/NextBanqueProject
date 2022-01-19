import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/roboto/700.css";
CI = false;

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Link href="/" passHref>
            <Button color="inherit">Journal</Button>
          </Link>
          <Link href="/add-entry" passHref>
            <Button color="inherit">Add entry</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
